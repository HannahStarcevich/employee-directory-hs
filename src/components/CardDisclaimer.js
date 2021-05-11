import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  
    root: {
        maxWidth: "100%",
        minWidth: "100%",
        maxHeight: '62px',
        minHeight: '62px%',
        flex: "wrap",
        border: '1px solid',
        borderColor: theme.palette.orange.main,
        borderRadius: 2,
        transition: '0.4s',
        boxShadow: '0 8px 16px 0 #BDC9D7',
    },
}));

const CardDisclaimer = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="h3">
           Please note: Using a free mock employee database API in which data is faulty and the coordinate do not match the addresses listed per each fake user. The Google Maps API shown here accurately renders the false coordinates, working as expected.
          </Typography>
        </CardContent>
    </Card>
  );
}
export default CardDisclaimer;