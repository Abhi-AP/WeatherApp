import  React, {
  Component
} from 'react'
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'
import Input from './components/input'
import ErrorBoundary from './components/ErrorBoundary'
import Locate  from './components/locate'
import Map from './components/Map'
class App extends React.Component{

    render()
    {
        return(
        <div className='App' style={{  
          backgroundImage: "url(" + "https://cdn.pixabay.com/photo/2010/12/13/10/01/celsius-2125_960_720.jpg" + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
        <div class="jumbotron align-middle">
        <h1>WEATHER WEB APP</h1>
        </div>
        
        {/*<Input/>
             <Map google={this.props.google}
                 center={{lat:18.5204,lng:73.8567}}
                 height='300px'
                 zoom={15}
                 /> */}
              <Locate/>
        </div>
        ); 
    }
}


export default App;
