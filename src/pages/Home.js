
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import API from '../utils/API';
import EmployeeTable from "../components/EmployeeTable"
import Map from "../components/Map"
import AppBar from "../components/AppAppBar"
import Geocode from "react-geocode";
import AppAppBar from '../components/AppAppBar';
import AppFooter from '../components/AppFooter';
import { RecentActorsSharp } from '@material-ui/icons';
import ProductHero from '../components/ProductHero';
import SearchBar from '../components/SearchBar';
import MultiSelectChips from '../components/MultiSelectChips';


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
}))

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey(process.env.GOOGLE_MAPS_API_KEY);

// set response language. Defaults to english.
Geocode.setLanguage("en");
Geocode.setRegion("us");
Geocode.setLocationType("ROOFTOP");

export default function Home(){

    const classes = useStyles();

    const [employees, setEmployees] = React.useState([]);
    const [searchEmployee, setSearchedEmployees] = React.useState('');
    const [coordinates, setCoordinates] = React.useState({});
    const [countries, setCountries] = React.useState([]);

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
                    {/* <MultiSelectChips title={}/> */}
                </Grid>
                <Grid item className={classes.mainContainer}>
                     <EmployeeTable rows={employees.filter( (employee) => {
                         if (!(employee.name.first.toLowerCase().includes(searchEmployee.toLowerCase()) || employee.name.last.toLowerCase().includes(searchEmployee.toLowerCase()) )) {
                             return false;
                         }
                         return true;
                        })} />
                </Grid>
                <Grid item className={classes.mainContainer}>
                    <Map employees={employees} center={coordinates} />
                </Grid>
            </Grid>
            <AppFooter/>
        </React.Fragment>
    )
}

