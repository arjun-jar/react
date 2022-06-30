import React from 'react'

function FunctionClick() {
function clickHandler(){
    console.log("button clicked")
}


  return (
    <button onClick={clickHandler}>FunctionClick</button>
  )
}

export default FunctionClick