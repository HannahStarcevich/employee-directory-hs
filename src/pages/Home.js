
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import React, { useState, useEffect } from "react";
import API from '../utils/API';
import EmployeeTable from "../components/EmployeeTable"
import Geocode from "react-geocode";
import AppAppBar from '../components/AppAppBar';
import AppFooter from '../components/AppFooter';
import ProductHero from '../components/ProductHero';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';
import Map from '../components/Map';
import { connect } from 'react-redux';

const useStyles= makeStyles((theme) => ({
    mainContainer: {
        marginLeft: theme.spacing(8),
        marginTop: theme.spacing(2),
        marginBottom: "2em",
        width: "90%",
        justifyContent: "space-evenly",
        [theme.breakpoints.down("md")]:{
            width: "80%"
        },
        [theme.breakpoints.down("sm")]:{
            width: "70%"
        },
        [theme.breakpoints.down("xs")]:{
            spacing: theme.spacing(2),
            marginLeft: "3.5em"
        }
    },
    cardContainer: {
        flex: 1,
        display: 'flex',
        padding: theme.spacing(3),
        justifyContent: 'space-between',
    }, 
    card: {
        marginLeft: "10em",
    }
}))

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey(process.env.GOOGLE_MAPS_API_KEY);

// set response language. Defaults to english.
Geocode.setLanguage("en");
Geocode.setRegion("us");
Geocode.setLocationType("ROOFTOP");

const Home = (props) => {

    const classes = useStyles();

    const [employees, setEmployees] = React.useState([]);
    const [searchEmployee, setSearchedEmployees] = React.useState('');
    const [coordinates, setCoordinates] = React.useState({});

    useEffect(() => {
        loadEmployees()
        }, [])

    function loadEmployees() {
        API.getEmployees()
            .then(res => {
                setEmployees(res.data.results)
                setCoordinates({lat: parseFloat(res.data.results[0]?.location.coordinates.latitude), lng: parseFloat(res.data.results[0]?.location.coordinates.longitude)})
                console.log(res.data.results)
            }).catch(err => console.log(err))
    }

    const handleSeachInputChange = (event) => {
        setSearchedEmployees(event.target.value)
    };

    return( 
        <React.Fragment>
            <AppAppBar />
            <ProductHero/>
            <Grid container>
                <Grid item item className={classes.mainContainer}>
                    <SearchBar searchEmployee={searchEmployee} onChange={handleSeachInputChange}/>
                </Grid>
                <Grid item className={classes.mainContainer}>
                     <EmployeeTable rows={employees.filter( (employee) => {
                         if (!(employee.name.first.toLowerCase().includes(searchEmployee.toLowerCase()) || employee.name.last.toLowerCase().includes(searchEmployee.toLowerCase()) )) {
                             return false;
                         }
                         return true;
                        })} />
                </Grid>
                {props.firstName ? (
                    <Grid container className={classes.cardContainer}>
                        <Grid item xs={10} s={10} m={4} lg={4}  >
                            <Card className={classes.cardContainer}/>
                        </Grid>
                        <Grid item xs={10} s={10} m={6} lg={8}>
                            <Map center={coordinates}/>
                        </Grid>
                    </Grid>
                ): null}
            </Grid>
            <AppFooter/>
        </React.Fragment>
    )
}
const mapStateToProps = (state) => {
    return {
        ...state.employee
    }
};

export default connect(mapStateToProps)(Home);
