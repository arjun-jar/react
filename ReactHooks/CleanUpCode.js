import React,{useState} from 'react'
import EffectHookClean from './EffectHookClean'

function CleanUpCode() {
    const[display,setDisplay]=useState(true)
  return (
    <div>
        
<button onClick={()=>setDisplay(!display)}>toggle display</button>
{
    display&& <EffectHookClean/> 
}

    </div>
  )
}

export default CleanUpCode