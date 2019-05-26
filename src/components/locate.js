import React from "react"
import { geolocated } from "react-geolocated"
import Input from './input'
import Dashboard from './Dashboard'
import ErrorBoundary from './ErrorBoundary'
class Locate extends React.Component
{
    state={
    latitude:String,
    longitude:String
    }
    render()
    {
        let torender=null;
        if(!this.props.isGeolocationAvailable)
            torender=<div>
                <Input/>
                <kbd>Geolocation Not Available</kbd>
                </div>
        else if(!this.props.isGeolocationEnabled)
            torender=<div>
            <Input/>
            <kbd>Geolocation Not Enabled</kbd>
            </div>
        else if(this.props.coords)
        {    
            torender=<div>
                     <Dashboard City={this.props.coords.latitude+','+this.props.coords.longitude}/>
                     </div>
        }
        return(
            <div>
                <ErrorBoundary>
                     {torender}
                </ErrorBoundary>
            </div>
        );
    }
}
export default geolocated({
    positionOptions: {
        enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
})(Locate);