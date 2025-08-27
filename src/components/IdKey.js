import React, {useState} from "react"
function IdKey(){
  const [persons, setPersons] = useState([
    { id: 1, name: "Aro"},
    { id: 2, name: "Aru"},
    {id: 3, name: "Her"}
  ]);
  <div>
    <h2>Person List(Using id as key)</h2>
    {persons.map(person =>(
      <h3 key={person.id}>{person.name}</h3>
    ))}
    <button onClick={() => setPersons([...persons, {id:4, name:"Rav"}])}>Add Person</button>
  </div>
}