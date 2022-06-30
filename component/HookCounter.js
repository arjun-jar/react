import React,{useState} from 'react'

function HookCounter() {
    const initialCount=0
   const [count,setCount] =useState(initialCount)

  const incrementFIve=()=>{
    for(let i=0;i<5;i++){
        setCount(prevCount =>prevCount+1);
    }
   }

  return (
    <div> 
    <button onClick={()=>setCount(initialCount)}>{count}</button> 
    <br/>
    
    <button onClick={()=>setCount(initialCount)}>reset </button> 
     <button onClick={()=>setCount(count =>count+1)}>increment </button> 
     <button onClick={()=>setCount(pcount =>count-1)}>decrement </button>
     <button onClick={incrementFIve}>incriment 5 </button>
     
     </div>
  )
}

export default HookCounter