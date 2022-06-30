import React,{useState,useEffect} from 'react'

function HookUseEffect() {
 
const[count,setCount]=useState(0)
const[name,setName]=useState('')
    useEffect(()=>{
        console.log('useEffect updating document title')
        document.title=document.title=`You clicked${count} times`
    },[count])
  


function clickHandler(e){
   
    console.log(e)
         setCount(p=>p+1)
 }
  return (
    <div>
        
          <input type='text' value={name} onChange={e=>setName(e.target.value)} ></input>
      
        <button onClick={clickHandler}>{count} times clicked</button>
 
    </div>
  )
}

export default HookUseEffect