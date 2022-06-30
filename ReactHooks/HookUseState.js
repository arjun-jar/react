import React,{useState} from 'react'


function HookUseState(){
  
    const[count,setCount]=useState(0);

    function clickHandler(e){
   
   console.log(e)
        setCount(p=>p+1)
}

    return(
        <>
        <h3>click to increment 5 times</h3>

  <button onClick={clickHandler}>{count} times clicked</button>

        </>
    )
}


export default HookUseState