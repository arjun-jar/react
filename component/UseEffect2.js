import React, { useState,useEffect } from 'react'

function UseEffect2() {
    const[count,setCount]=useState(0)
    const[name,setName]=useState('')

   useEffect(()=>{
    document.title=`clicked ${count} times`
    console.log('updating document')
   },[count])




  return (
 

    <div> 
 <div>

    <input value={name} onChange={e=>setName(e.target.value)}></input>
        <button onClick={()=>setCount(count+1)}>Click {count} times</button></div>

    </div>
  )
}

export default UseEffect2
