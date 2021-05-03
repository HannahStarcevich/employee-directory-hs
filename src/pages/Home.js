
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import API from '../utils/API';
import EmployeeTable from "../components/EmployeeTable"

const useStyles= makeStyles((theme) => ({
    mainContainer: {
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(5),
        marginBottom: "5em",
        width: "70%",
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

export default function Home(){

    const classes = useStyles();

    const [employees, setEmployees] = React.useState([]);

    useEffect(() => {
        loadEmployees()
        }, [])

    function loadEmployees() {
        API.getEmployees()
            .then(res => {
                setEmployees(res.data.results)
                console.log(res.data.results)
            }).catch(err => console.log(err))
    }

    return(
        <Grid container className={classes.mainContainer}>
            <Grid item>
                <Typography variant="h4" color="primary">Insert Header Here</Typography>
            </Grid>
            <EmployeeTable rows={employees} />
        </Grid>
    )
}

