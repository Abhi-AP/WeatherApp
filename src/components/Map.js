import React , {Component} from 'react'
import {withGoogleMap,GoogleMap,withScriptjs,InfoWindow,Marker} from "react-google-maps"
import Geocode from "react-geocode"
import Dashboard from './Dashboard'
import { tsConstructorType } from '@babel/types';
Geocode.setApiKey( "AIzaSyAz2-1i9GR-Q9HjUKtSSG5E2YHb-ehWG3I");
Geocode.enableDebug();
class Map extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            address:'',
            city:'',
            mapPosition:{
                lat:this.props.center.lat,
                lng:this.props.center.lng
            },
            markerPosition:{
                lat:this.props.center.lat,
                lng:this.props.center.lng
            }
        }

    }
    componentDidMount()
    {
        Geocode.fromLatLng(this.state.mapPosition.lat,this.state.mapPosition.lng)
        .then(res=>{
            const address=res.results[0].formatted_address,
            addressArray=res.results[0].address_components,
            city=this.getCity(addressArray);
            this.setState({
                address:(address)?address:'',
                city:(city)?city:'',
            })   
        },error=>{
            console.error(error);
        }
        ) 
    }
    onMarkerDragEnd=(e)=>{
        let newlat=e.latLng.lat();
        let newlng=e.latLng.lng();
        Geocode.fromLatLng(newlat,newlng)
        .then(res=>{
            const address=res.results[0].formatted_address,
            addressArray=res.results[0].address_components,
            city=this.getCity(addressArray);
            console.log({city})
            this.setState({
                address:(address)?address:'',
                city:(city)?city:'',
            })   
        },
        error=>{
            console.error(error);
        }
        );
        return <Dashboard City={this.state.city}/> 
 
    };
    onPlaceSelected=(place)=>{

    }

    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    getCity=(addressArray)=>
    {
        let city=''
        for(let i=0;i<addressArray.length;++i)
        {
            if (addressArray[ i ].types[0] && 'administrative_area_level_2' === addressArray[ i ].types[0])
            {
                return addressArray[i].long_name;
            }
        }
    }
    render()
    {
        const AsyncMap=withScriptjs(
            withGoogleMap(
                props=>(
                    <GoogleMap google={this.props.google}
                               defaultZoom={this.props.zoom}
                                defaultCenter={{lat:this.state.mapPosition.lat,lng:this.state.mapPosition.lng}}
                                >
                                <Marker google={this.props.google}
						        name={'Dolores park'}
						        draggable={true}
						        onDragEnd={ this.onMarkerDragEnd }
						        position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
						        />
						        <Marker />
                                </GoogleMap> 
                )
            )
        );
        let map
        if(this.props.center.lat!=undefined)
        {
            map=<div>
                <AsyncMap googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyAz2-1i9GR-Q9HjUKtSSG5E2YHb-ehWG3I&sensor=true'
                    loadingElement={
                        <div style={{height:'100%'}}/>
                    }
                    containerElement={
                        <div style={{height:this.props.height}}/>
                    }
                    mapElement={<div style={{height:'100%'}}/>
                }
                />
                <Dashboard City={this.state.city}/> 
                </div>
        }
        else
             map=<div style={{height:this.props.height}}/>
        return (map)
    }     
}
export default Map;
