import React from 'react'

function PersonList({person}) {
  return (
    <h2>
    I am {person.names}.I am {person.age} years old.I know {person.skill}
</h2>
  )
}

export default PersonList