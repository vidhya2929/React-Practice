// Create a Greet component that accepts name and heroName as props  and renders
import React from "react";
function Greet(props){
  return (
    <div>
      {/* props = properties, they are inputs you pass into a component(like attribute in HTML) */}
      {/* React collects all the attributes we pass and puts them into a single object called(props)*/}
      <h1>Heyy {props.name} also known as {props.heroName}</h1>
      {/* here reaxt substitites {props.name} with "Bruno" and {props.heroName} with "Thor" . So it returns  JSX <h1>Hello Bruno also known as Thor />*/}
    </div>
  )
}
export default Greet
// props => input data for components(immutable)
// Rendering => React calling component with props, and then converting JSX into actual DOM elements