import React from 'react'
function Fun2(){
  const Persons = [
    {id: 1,
      name: 'Harry',
      age: 20,
      skill: 'Expelliarmus'
    },
    {
      id:2,
      name:'Hermione',
      age: 19,
      skill: 'Time-Turner'
    },
    {
      id:3,
      name: 'Ron',
      age: 20,
      skill: 'Chess'
    },
    {
      id:4,
      name: 'Luna',
      age: 18,
      skill: 'Creatures Knowledge'
    }
  ];
  return(
    <div>
      <h2>Hogwarts</h2>
      <ul>
        {Persons.map(person => (
          <li key={person.id}>
            I am <b>{person.name}</b>, {person.age} years old, skilled in <i>{person.skill}</i>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Fun2