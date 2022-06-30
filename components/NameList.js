import React from 'react'
import PersonList from './PersonList'


function NameList() {
    const names=['arjun','mallik','guru']
    const nameList=  names.map(name=><h2>{name}</h2>)
    const person=[
        {
            id: 1,
            names: 'arjun',
            age: 25,
            skill: 'react'
        },
        {
            id: 2,
            names: 'arjun',
            age: 25,
            skill: 'angular'
        },
        {
            id: 3,
            names: 'arjun',
            age: 25,
            skill: 'java'
        }
        
          ]
 const personList=person.map
 (person => <PersonList key={person.id} person={person}/>)  
 function m2(){
    console.log(personList)
 }
 return <> {personList}
 <h2>{()=>m2()}</h2>
 </>

}

export default NameList