import React from 'react';
// 1. Import GoogleMapLoader & GoogleMap components
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

// 2. This is a simple component, so we'll just create a simple function for rendering this.
export default (props)=>{
    console.log(`[DEBUG-CityMap]  - lon:${props.lon}, lat:${props.lat}`);
    return (        
        <GoogleMapLoader 
            containerElement={ <div style={{height: "100%"}} /> }
            googleMapElement={ 
                <GoogleMap defaultZoom={12} defaultCenter={{ lat: props.lat, lng: props.lon}} /> 
            } />
    );
}