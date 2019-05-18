import  React, {
  Component
} from 'react'
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'
import Input from './components/input'
class App extends React.Component{

    render()
    {
        return(
        <div className='App'>
        <Router>
          <Switch>
              <Route path='/' component={Input}/>
          </Switch>   
        </Router>
        </div>
        ); 
    }
}


export default App;
