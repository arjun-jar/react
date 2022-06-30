import React from 'react'
import './myStyle.css'
function StyleSheet(props) {
    const className=props.primary ? 'primary':''

  return (
    <h1 className={`${className} font-xl`}>Stylesheet</h1>
  )
}

export default StyleSheet