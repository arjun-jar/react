import React, { Component } from 'react'
 
import ChildComponent from './ChildComponent'

  class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'parent'
      }
      this.greetparent=this.greetparent.bind(this)
    }
    greetparent(name){
        alert(`hello${this.state.parentName} from ${name}`)
    }


 
  render() {
    return (
      <div>
     <br></br>
        <ChildComponent greeatHandler={this.greetparent} /> 
        <h3>hello this parent component</h3>

        </div>
    )
  }
}

export default ParentComponent