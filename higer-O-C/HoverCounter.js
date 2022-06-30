import React, { Component } from 'react'
import UpdatedComponent from './UpdatedComponent'

  class HoverCounter extends Component {
   render() {
    const{count,increCount}=this.props
    return (
      <div> 

    <h3 onMouseOver={increCount}>  mouse moved {count} times</h3>
      </div>
    )
  }
}

export default UpdatedComponent(HoverCounter)