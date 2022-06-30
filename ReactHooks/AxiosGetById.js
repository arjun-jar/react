import React,{useState,useEffect} from 'react'
import axios from'axios'

function AxiosGetById() {

    const[post,setPost]=useState({})
   const[id,setId]=useState(1)
   const[btnId,setBtnId]=useState(id)
useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=>{setPost(res.data)
    console.log(res.data)})
    .catch(er=>{console.log(er)})
},[btnId])

  return (

<>
 
    <input type='text' value={id} onChange={(e)=>setId(e.target.value)}></input>
 <button type='button' onClick={()=>setBtnId(id)}>fetch-data</button>
{
    JSON.stringify(post)
}
</>
  
  )
}
export default AxiosGetById