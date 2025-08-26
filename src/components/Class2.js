import React, { Component } from 'react'
class Class2 extends Component{
  render(){
  const persons =[
    {
      id: 1,
      name:"Harry",
      age: 26,
      skill: "Thunder"
    },
    {
      id: 2,
      name:"Ron",
      age:25,
      skill: "Disappear"
    },
    {
      id:3,
      name:"Hermione",
      age: 24,
      skill: "magic wand"
    },
    {
      id:4,
      name:"Luna",
      age: 26,
      skill: "kjfnnv"
    }
  ];
  return(
    <div>
      <h1>HogWarts</h1>
     <ul>
    {persons.map(person => (
      <li key = {person.id}>{person.name}</li>
    ))}
     </ul>
    </div>
  )
}
}
export default Class2