import  React, {
    Component
  } from 'react'
  const Butt=(props)=>{
      return(
          <button type="button" class="btn btn-primary btn-lg">{props.message}</button>
      );
  } 
  export default Butt;