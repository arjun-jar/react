import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <button onClick={()=>props.greeatHandler('arjun')}> childcomponent</button>
        </div>
  )
}

export default ChildComponent