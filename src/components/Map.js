import React, { useState, useEffect } from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import {NavLink} from "react-router-dom";
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

const containerStyle = {
  width: '100%',
  height: '420px',
  marginTop: "2em",
  marginBottom: "1em",
  border: '1px solid',
  borderRadius: 2,
  transition: '0.4s',
  boxShadow: '0 8px 16px 0 #BDC9D7',
};

const useStyles=makeStyles(theme => ({
  markerPhotos: {
    marginLeft: "0.75em",
    marginTop: "0.5em",
    maxWidth: "2px",
    minWidth: "2px",
    borderRadius: 4, 
    boxShadow: '0 4px 10px 0 #BDC9D7'
  },
  cardText: {
    marginTop: "0.25em",
  },
  infoWindow: {
    maxWidth: "20px",
    minWidth: "20px",
    maxHeight: '80%',
    minHeight: '80%',
  }
}))

function Map(props) {
    
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyApR86z8S3ck-lPN02QTW_Prabc2SGCL4Q',
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const classes = useStyles()

  function onMarkerClick(props, marker, e) {
    console.log("it worked")
  }

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={props.center}
        zoom={4}
        tilt={45}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker 
          key={props.email}
          position={{lat: props.lat, lng: props.lng}} 
          onClick={props.onMarkerClick}>
  
                <InfoWindow
                  key={props.id}
                  position={{lat: props.lat, lng: props.lng}}
                  className={classes.infoWindow}>
                    <div>
                      <CardMedia 
                        component="img"
                        alt="profile photo"
                        height="80"
                        image={props.picture}
                        className={classes.markerPhotos}/>
                      <Typography variant="theme" component="h5" className={classes.cardText}>
                        {props.city}, {props.state}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="h5" className={classes.cardText}>
                        {props.country}
                      </Typography>
                    </div>
                </InfoWindow>
 
          </Marker>
      </GoogleMap>
  ) : <></>
}

const mapStateToProps = (state) => {
  return {
      ...state.employee
  }
};

export default connect(mapStateToProps)(React.memo(Map))