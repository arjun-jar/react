import React, { Component } from 'react'
import axios from 'axios'
export default class PostReq extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userId:'',
       userName:'',
       password:''
    }
  }
  
  inputHandler=(e)=>{
    
  this.setState({[e.target.name]:e.target.value})
  
}
  submitHandler=(e)=>{e.preventDefault();
    console.log(this.state)
    axios.post('https://jsonplaceholder.typicode.com/posts',this.state).then(res=>{
        
    
    console.log(res.data)}
    
    )
 .catch(error=>{console.log(error)}) }
 
    render() {
        const{userId ,
        userName ,
        password }=this.state
    return (
      <div> 
<h4> thi is post method using react.js</h4>
<form onSubmit={this.submitHandler}>   
<>
<input type='text' name='userId' value={userId} onChange={this.inputHandler} placeholder='enter any id'></input>
<br/><br/><input type='text' name='userName' value={userName} onChange={this.inputHandler} placeholder='enter name'></input>
<br/><br/><input type='password' name='password' value={password} onChange={this.inputHandler} placeholder='enter ur password'></input>
 <br/> <br/><button type='submit'>submit</button>



</>
</form>
    </div>
    )
  }
}
