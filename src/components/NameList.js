// import React from 'react';
// import Person from './Person';
// function NameList(){
//   const persons = [
//     {
//       id:1,
//       name:"Moto",
//       age: 22,
//       skill: "React"
//     },
//     {
//       id: 2,
//       name:"Moto",
//       age: 24,
//       skill: "Angular"
//     },
//     {
//       id: 3,
//       name: "Moto",
//       age: 21,
//       skill: "Vue"
//     }
//   ];
//   const personList = persons.map(person =>(
//     <Person key ={person.id} person = {person}/>
//     // key={person.id} helps React identify each <Person/> uniquely in the list, making rendering faster and avoiding bugs.
//   ));
//   return <div>{personList}</div>;
// }
// export default NameList;

import React from 'react'
import Person from './Person'
function NameList(){
  const persons = [
    {
      id:1,
      name:"Harry",
      age: 22,
      skill: "React"
    },
    {
      id: 2,
      name:"Hermione",
      age: 21,
      skill:'Angular'
    },
    {
      id:3,
      name: "Ron",
      age:22,
      skill:"Vue"
    }
  ];
  const personList = persons.map(person =>(
    <Person key={person.id} person={person}/>
  ));
  return(
    <div>
      {personList}
    </div>
  )
}
export default NameList