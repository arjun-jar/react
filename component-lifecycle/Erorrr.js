import React, { Component } from 'react'

export class Erorrr extends Component {
constructor(props) {
  super(props)

  this.state = {
     hasError:false
  }
}

static getDerivedStateFromError(){
    return{
     hasError:true
    }
}


  render() {
   if(this.state.hasErorr){
    return <h3>something went wrong</h3>
   }
   return this.props.children
  }
}

export default Erorrr
