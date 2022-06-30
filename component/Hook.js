import React ,{useState}from 'react'

function Hook() {
const[name,setName]=useState({

    firstName:'',
    lastName:''

})
  return (
    <div>
        
        <input type="text"
         value={name.firstName}
         onChange={e=>setName({...name,firstName:e.target.value})}></input>
        <br/>

        <input type="text" value={name.lastName}
         onChange={e=>setName({...name,lastName:e.target.value})}>

         </input>
    <h2>your first name is: {name.firstName}</h2>
    <h2>your first name is:{name.lastName} </h2>

    </div>
  )
}

export default Hook