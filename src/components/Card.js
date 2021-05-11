import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  
    root: {
        maxWidth: "90%",
        minWidth: "90%",
        maxHeight: '500px',
        minHeight: '500px%',
        flex: "wrap",
        border: '1px solid',
        borderColor: theme.palette.orange.main,
        borderRadius: 2,
        transition: '0.4s',
        boxShadow: '0 8px 16px 0 #BDC9D7',
    },
    media: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(5),
      marginBottom: "0em",
        maxWidth: "70%",
        minWidth: "70%",
        maxHeight: '300px',
        minHeight: '300px',
        borderRadius: 4, 
        boxShadow: '0 4px 10px 0 #BDC9D7'
    },
}));

const MediaCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.picture}
          title="employee profile photo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}. {props.firstName} {props.lastName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h3">
            Email: {props.email}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h3">
            Cell: {props.phone}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h3">
            Tenure: {props.tenure} years
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary" onClick={event =>  window.location.href=`mailto:${props.email}`}>
          Reach Out
        </Button>
      </CardActions>
    </Card>
  );
}
const mapStateToProps = (state) => {
    return {
        ...state.employee
    }
};

export default connect(mapStateToProps)(MediaCard);