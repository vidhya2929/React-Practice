// function Hello(){
//   return <h1>Hello React!</h1>
// }
// // export default Hello;

// function Greeting(props){
//   return <h1>Hello {props.name}!</h1>
// }
// export default function App(){
//   return <Greeting name = "Harry"/>
// }
// Counter with state =>each key  
// import react, { useState } from 'react';
// function Counter(){
//   const[count,setCount] = useState(0);
//   return (
//     <div>
//       <p>Clicked {count} times </p>
//       <button onClick={() => setCount(count + 1)}>Click Me</button>
//     </div>
//   )
// }
// export default Counter;

// Conditional
import react, {useState} from 'react';
function LoginGreeting(){
  const [isLoggedIn, setIsLOggedIn] = useState(false);
  return (
    <div>
      <h1>{isLoggedIn ? "Welcome Harry" : "Welcome Guest"}</h1>
      <button onClick={() =>setIsLOggedIn(!isLoggedIn)}>Toggle Login</button>
    </div>
  );
}

function NameList(){
  const names = ["Harry", "Riya", "Raju"];
  return(
    <ul>
      {names.map((name, index)=> (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}

import React, { useState } from "react";
function InputDemo(){
  const [text, setText] = useState("");
  return (
    <div>
      <input onChange={(e) => setText(e.target.value)}/>
      <p>You typed : {text}</p>
    </div>
  );
}