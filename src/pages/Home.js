
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
import CardDisclaimer from '../components/CardDisclaimer';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';


const useStyles= makeStyles((theme) => ({
    mainContainer: {
        marginLeft: theme.spacing(8),
        marginTop: theme.spacing(2),
        marginBottom: "1em",
        width: "90%",
        justifyContent: "space-evenly",
        [theme.breakpoints.down("md")]:{
            width: "80%"
        },
        [theme.breakpoints.down("sm")]:{
            width: "90%"
        },
        [theme.breakpoints.down("xs")]:{
            spacing: theme.spacing(2),
            // marginLeft: "3.5em"
        }
    },
    card: {
        marginLeft: "4em",
        marginTop: "2em",
        marginBottom: "2em",
    },
    paper: {
        width: "90%",
        marginLeft: "4em",
        display: 'flex',
        color: theme.palette.orange.main,
        backgroundColor: "#e1e1e1",
        marginBottom: "2em",
    }
}))

// // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
// Geocode.setApiKey(process.env.GOOGLE_MAPS_API_KEY);

// // set response language. Defaults to english.
// Geocode.setLanguage("en");
// Geocode.setRegion("us");
// Geocode.setLocationType("ROOFTOP");

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
            <AppAppBar xs={12} />
            <ProductHero xs={12} />
            <Grid container>
                <Grid item className={classes.mainContainer} xs={12} >
                    <SearchBar searchEmployee={searchEmployee} onChange={handleSeachInputChange} xs={10}/>
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
                    <Grid container>
                        <Paper elevation={3} variant="outlined" className={classes.paper} >
                            <Grid item xs={12} s={12} m={4} lg={3}  className={classes.card}  >
                                <Card />
                            </Grid>
                            <Grid item xs={12} s={12} m={6} lg={8}>
                                <Map center={coordinates} className={classes.map}/>
                                <CardDisclaimer />
                            </Grid>
                        </Paper>
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
