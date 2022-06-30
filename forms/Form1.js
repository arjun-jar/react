 import React, { Component } from 'react'
 
   class Form1 extends Component  {


    constructor(props) {
      super(props)
    
      this.state = {
         name:'',
         text:'type anything here',
         tittle:'javaScript',
         valu:'submit'
      }
    }

    handleName=event=>{
      this.setState({
        name:event.target.value
      })
    }
    textHandler=event=>{
      this.setState({
        text:event.target.value
      })
    }

    tittleHandler=event=>{
      this.setState({
        tittle:event.target.value
      } )
    }

  submitHandler= event=>{
    this.setState({
      valu:'submitted',
     
    })
  }

    handleSubmit=event=>{
      alert(`${this.state.name} you typed ${this.state.text} and you know ${this.state.tittle}`)
      event.preventDefault()
   
    }
   render() {
    const{name,text,tittle,valu}=this.state
     return (
       <div>
<form onSubmit={this.handleSubmit}>
<h1>hello this is form handling in react application</h1>
<label>name</label>
<input type="text" value={this.state.name} onChange={ this.handleName}></input>
<div>
<label>textarea</label>
<textarea value={this.state.text} onChange={this.textHandler}></textarea>
</div>

<div>
<label>
  topic
</label>
 <select value={this.state.tittle} onChange={this.tittleHandler}>
  <option>javaScript</option>
  <option>java</option>
  <option>react</option>
  <option>angular</option>
 </select>
 
 
</div>

<input type='submit' value={this.state.valu}  onClick={this.submitHandler}></input>
</form>

       </div>
     )
   }
 }
 
 export default Form1