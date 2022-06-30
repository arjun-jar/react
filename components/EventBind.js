import React, { Component } from 'react'

class EventBind extends Component {

 constructor(props) {
   super(props)
 
   this.state = {
      message:'hello'
   }
//this.clickHandler=this.clickHandler.bind(this)
 }
//  clickHandler(){
// this.setState({
//     message:'goodBye'
// })

clickHandler=()=>{
    this.setState({
        message:'goodBye'
    })
     }
 
 

  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button  onClick={this.clickHandler}> click </button>
        {/* <button onClick={this.clickHandler.bind(this)}> click </button></div> */}
        {/* <button onClick={()=>this.clickHandler()}> click </button></div> */}
        </div>
    )
  }
}

export default EventBind