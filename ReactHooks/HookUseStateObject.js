import React,{useState} from 'react'

function HookUseStateObject() {
    const[name,setName]=useState({firstName:'',lastName:''})
  return (
    <div>
    
    <form>

<input type='text' value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})} ></input>
<br/><br/>
<input type='text' value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}></input>

 
</form>
<h5>{JSON.stringify(name)}</h5>

    </div>
  )
}

export default HookUseStateObject