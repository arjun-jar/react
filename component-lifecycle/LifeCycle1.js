import React, { Component } from 'react'

export default class LifeCycle1 extends Component {

constructor(props) {
  super(props)

  this.state = {
    name:'Mallik'

  }
  console.log("constructor,1")
}
 
static getDerivedStateFromProps(props,state){
  console.log("getderivedStateFromProps,2")
  return null
}
shouldComponentUpdate(){
  console.log("shouldComponentUpdate")
  return true
}
getSnapshotBeforeUpdate(){
  console.log("getSnapshotBeforeUpdate")
  return null
}
componentDidUpdate(){
  console.log("componentDidupdate")
}

 
  render() {
    console.log("render")
    
    return (
    
<React.Fragment>
   <button onClick={()=>this.setState({name:'Arjun'})}>click</button>
      <h4>
        {this.state.name}
      </h4>
        <h3>
          Component lifecycle method
      </h3>

      </React.Fragment>
    )
  }
}
