import React, { Component } from 'react'
import UpdatedComponent from './UpdatedComponent'
 
    class ClickCounter extends Component {
  
        render() {
          const{count,increCount}=this.props
    return (

        <>
        <h6>
            {this.props.name}
        </h6>
        <button onClick={increCount} >{count}Times Clicked</button> 
  
        
        </>
        
   
    )
  }
}
 export default  UpdatedComponent(ClickCounter) 