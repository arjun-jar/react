import React,{useState,useEffect} from 'react'
import axios from'axios'
function AxiosGet() {

    const[post,setPost]=useState([])

useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then(res=>{setPost(res.data)
    console.log(res.data)})
    .catch(er=>{console.log(er)})
},[])

  return (


    <div> 
 <ol>
 {post.map(post=><li key= {post.id}>{post.title}</li>)} 
 
 </ol>
 
    </div>
  )
}

export default AxiosGet