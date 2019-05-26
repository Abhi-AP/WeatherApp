import  React, {
    Component
  } from 'react'
import Dashboard from './Dashboard'
import ErrorBoundary from './ErrorBoundary'
class Input extends React.Component{
constructor(props)
{
    super(props)
    this.state={
    targetCity:null,
    toDisplay:null,
    }
}
handleChange(e)
{
    this.setState({targetCity:e.target.value,toDisplay:null})
    e.preventDefault();
}
handleSubmit(e)
{
    this.setState({toDisplay:<Dashboard City={this.state.targetCity}/>})
    e.preventDefault();
}
render(){
   // let background=require(imgurl)
        return(
        <ErrorBoundary>
        <div class="container">
            <h2><kbd>ENTER THE NAME OF THE CITY</kbd></h2>
            <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" value={this.state.targetCity} onChange={this.handleChange.bind(this)} />
            <button type="submit" class="btn-primary">Get Weather Details</button>
            </form>
            {this.state.toDisplay}
        </div>
        </ErrorBoundary>
        );
}
}
export default Input;