import React from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDziaGGSMDLI4cQP20gw21UqZDjE5ahOW4&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat:20.6871418,lng:-103.3799851 }}
  >
  {props.isMarkerShown && <Marker position={{ lat: 20.6871418, lng: -103.3799851 }} />}
  </GoogleMap>
)

export default MyMapComponent;
