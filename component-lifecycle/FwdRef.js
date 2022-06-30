import React from 'react'

const FwdRef=  React.forwardRef( (props,ref)=> {
    return (
      <div><input ref={ref}></input></div>
    )
  }) 

export default FwdRef