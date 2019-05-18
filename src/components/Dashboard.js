import  React, {
    Component
  } from 'react'
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
            city:String
        }
    }
    componentDidMount(){
         fetch('http://api.apixu.com/v1/current.json?key=daef30a4c6e24036853112449190605&q='+this.props.City)
        .then(res=>res.json())
        .then((res)=>{
                this.setState({
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
            )    
    }
    render()
    {
        const {isLoaded,error,temperature,image,isDay,humidity,region,country,condition,city}=this.state;
        let image_dn=null
        if(!isDay){
            image_dn='https://images.cdn2.stockunlimited.net/preview1300/full-moon-and-stars-background_1519164.jpg'
        }
        else
        {
            image_dn='https://images.pexels.com/photos/301599/pexels-photo-301599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }
        if(error!=null)
        {
            return(<div>Invalid Input</div>);
        }
        if(!isLoaded){
            return(
            <div class="align-middle">
                Loading....
            </div>);
        }
        else{
            return(
                <div style ={ { backgroundImage: "url("+image_dn+")",  height: '100%' } }>
                    
                    <img src={image}  height="70" width="70"/>
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
            );
          }
    }
}
export default Dashboard;