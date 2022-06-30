import React from 'react'

 const UpdatedComponent =OriginalComponent=>{
   class NewComponent extends React.Component{
    constructor(props) {
        super(props)
      
        this.state = {
           count:0,
           name:'arjun'
        }
      }
      
    increCount=()=>{
        this.setState(prevState=>{
            return {count:prevState.count+1}
        } 
        
       )
    }

   
    render(){
        return ( 
       <>
       
       <OriginalComponent st={this.state} count={this.state.count} increCount={this.increCount}   {...this.props} /> 

       </>
        )
      }
   }
   return NewComponent
 }

 export default UpdatedComponent