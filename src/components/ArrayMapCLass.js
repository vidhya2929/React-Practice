// Class Component
import React , { Component } from 'react'
class ArrayMapCLass extends Component{
  render(){
    const names = ["Harry", "Ron", "Hermione", "Luna"];
    return(
      <div>
      <h1>Hogwarts Students</h1>
      <ul>
        {names.map((name,index)=>{
          <li key={index}>{name}</li>
        })}
      </ul>
  </div>
 );
  }
}
export default ArrayMapCLass;