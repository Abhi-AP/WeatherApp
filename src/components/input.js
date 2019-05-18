import  React, {
    Component
  } from 'react'
import Dashboard from './Dashboard'
class Input extends React.Component{
constructor(props)
{
    super(props)
    this.state={
    targetCity:null,
    toDisplay:null
    }
}
handleChange(e)
{
this.setState({targetCity:e.target.value,toDisplay:null})
e.preventDefault();
}
handleSubmit(e){
this.setState({toDisplay:<Dashboard City={this.state.targetCity}/>})
e.preventDefault();
}
render(){
    let imgurl='https://cdn.pixabay.com/photo/2010/12/13/10/01/celsius-2125_960_720.jpg'
   // let background=require(imgurl)
        return(
        <div class="container" style ={ { backgroundImage: "url("+imgurl+")" ,  height: '100%'} }>
            <div class="jumbotron">
                <h1><kbd>WEATHER WEB APP</kbd></h1>
            </div>
            <h2>ENTER THE NAME OF THE CITY</h2>
            <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" value={this.state.targetCity} onChange={this.handleChange.bind(this)} />
            <button type="submit" class="btn-primary">Get Weather Details</button>
            </form>
            {this.state.toDisplay}
        </div>
        );
}
}
export default Input;