import React, { Component } from 'react'

export class ClassComponent extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      count:0
   }
 }
 incrementHandler=()=>{
this.setState({
    count:this.state.count++
    
})
 }
 render() {
    return (
      <div> 
   <h4 id='incr'>increment app</h4>
<button onClick={this.incrementHandler}>click here</button>
      </div>
    )
  }
}

export default ClassComponent