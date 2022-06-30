import React from 'react'

function Practice1() {
const names=['arjun','manju','anatu','ahnas','vishak','arjun']


const namesList=names.map((namea ,ind)=> <h2 key={ind}>{ind} {namea}</h2>)

  return (
    <div>{namesList}</div>
  )
}

export default Practice1