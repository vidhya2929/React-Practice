// Instead of directly writing <li>....</li> inside .map(), we will make a seperate Person component that takes person as a prop
import React from 'react'
function Person({person}){
  return (
    <div>
      <h3>
        I am <b>{person.name}</b>, {person.age} years old, skilled in <i>{person.skill}</i>
      </h3>
    </div>
  );
}
export default Person