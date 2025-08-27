import React from 'react';
import Person from './Person';
function PersonList(){
  const persons = [
    {id:1, name:'Harry', age: 20, skill:"Expelliarmus"},
    {id:2, name: 'Hermione', age:20,skill: 'Time-turner'},
    {id:3, name:'Ron', age:20, skill:'Creatures knowledge'},
    {id:4, name:'Luna', age:18,skill:'Chess'}
  ];
  return(
    <div>
      <h2>Hogwarts College</h2>
    {persons.map(person => (
      <Person key = {person.id} person={person}/>
    ))}
      </div>
    );  
}
export default PersonList
// PersonList has an array of objects
// .map() loops through each object
// Instead of rendering <li> directly, it passes the object to </Person>
// Person component receives the object as a prop(person).
// Person displays details(name, age, skill).
// key = {person.id} makes React track each unique element efficiently.
