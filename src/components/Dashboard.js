import  React, {
    Component
  } from 'react'
import ErrorBoundary from './ErrorBoundary'
class Dashboard extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            isLoaded : false,
            error:null,
            temperature : String,
            image:String,
            isDay:Boolean,
            humidity:String,
            region:String,
            country:String,
            condition:String,
            city:String,
        }
    }
    componentDidMount(){
         fetch('http://api.apixu.com/v1/current.json?key=daef30a4c6e24036853112449190605&q='+this.props.City)
        .then(res=>res.json())
        .then((res)=>{
                this.setState(
                    {
                    isLoaded : true,
                    temperature:res.current.temp_c,
                    isDay:res.current.is_day,
                    image:res.current.condition.icon,
                    humidity:res.current.humidity,
                    region:res.location.region,
                    country:res.location.country,
                    condition:res.current.condition.text,
                    city:res.location.name
                });
            },
            (error)=>{
            this.setState({
                    isLoaded:true,
                    error
                }); 
            }
            ).catch(error=>this.setState({error,isLoaded:false}))    
    }
    render()
    {
        
        if(this.props.City==null)
        {
            return(
                <div/>
            );
        }
        else if(this.state.error!=null)
        {
            return(
            <div>
                <h5>INVALID INPUT</h5>
            </div>);
        }
        const {isLoaded,error,temperature,image,isDay,humidity,region,country,condition,city}=this.state;
        let image_dn=null
        if(!isDay){
            image_dn='https://images.unsplash.com/photo-1553045365-a8f7e11fe233?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        }
        else
        {
            image_dn='https://cdn.pixabay.com/photo/2013/07/18/20/27/sunrise-165094_960_720.jpg'
        }
        
        if(!isLoaded){
            return(
            <div class="align-middle spinner-border text-light">
            </div>);
        }
        else{
            return(
                <div>
                <ErrorBoundary>
                <div style ={ { backgroundImage: "url("+image_dn+")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'} }>
                    <img src={image}  height="75" width="75"/>
                    <kbd>
                    <h3>City:{city}</h3>
                    <h4>State:{region}</h4>
                    <h5>Country : {country}</h5>
                    <h4>
                    <dl>
                        <dt>Temperature : </dt>
                        <dd>{temperature}°C</dd>
                        <dt>Humidity : </dt>
                        <dd>{humidity} %</dd>
                        <dt>Condition : </dt>
                        <dd>It is {condition} here</dd>
                    </dl>
                    </h4>
                    </kbd>
                </div>
                </ErrorBoundary>
                </div>
            );
          }
    }
}
export default Dashboard;