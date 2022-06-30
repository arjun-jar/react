import React, { Component } from 'react'
import axios from 'axios'

export default class HttpReq extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      post:[]
    }
  }
  
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts').then(
        response=>{
            console.log(response)
          this.setState({
            post:response.data
          })
        }
    ).catch(error=>{console.log(error)})
  }
  
    render() {
    return (
      <div>  List of posts 
      
      {
     this.state.post.length? this.state.post.map(post=> <div key={post.id} >{post.id}       {post.title}</div>):null
      }
      
      
      
      </div>
    )
  }
}
