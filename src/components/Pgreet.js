import React from 'react'
function Pgreet(props){
  return (
    <div>
      <h1>Hello {props.name} a. k. a {props.heroName}</h1>
      {props.children}  
      {/* This above will render whateveris passed between <greet/> */}
    </div>
  )
}
export default Pgreet

