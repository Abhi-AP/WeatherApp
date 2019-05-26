import  React, {
    Component
  } from 'react'
class ErrorBoundary extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state=
        {
            hasError:false
        }
    }
    static getDerivedStateFromError(error){
        return {hasError:true}
    }
    componentDidCatch(error,info)
    {
        console.log(error,info);
    }
    render()
    {
        if(this.state.hasError)
        {
            return (
                <div>
                    <h1>INVALID INPUT BOUNDED</h1>
                </div>
            );
         
        }
        return this.props.children;
    }
}
export default ErrorBoundary;