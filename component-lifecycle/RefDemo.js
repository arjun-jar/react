import React, { Component } from 'react'
import FwdRef from './FwdRef'

class RefDemo extends Component {

    constructor(props) {
        super(props)
     this.inRef=React.createRef()
      }
 


      componentDidMount(){
        this.inRef.current.focus()
        console.log(this.inRef)
      }
        clickHandler=()=>{
        alert(this.inRef.current.value)
      }
  render() {
   

    
  
    return (
        <div>
<FwdRef ref={this.inRef}/>
         <button type='submit' onClick={this.clickHandler}>click</button>
        </div>
      )
 
 
  }
}

export default RefDemo