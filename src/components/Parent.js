// Define a method (handleGreet) in the parent.
// Pass it to the child as a prop
// If you want to pass parameters, wrap the call in an arrow function

import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component{
  handleGreet = (name) => {
    alert(`Hello ${name}, from Parent Component!`);
  };
  render(){
    return (
      <div>
        <h2>Parent Component</h2>
        {/* Passing method as prop */}
        <Child greetHandler = {this.handleGreet}/>
      </div>
    );
  }
}
export default Parent

// Data flows downward (from parent -> child) through props.
// But sometimes, a child needs to communicate back to the parent(eg: button in child updates parent's state).
// Child cannot directly change parent's state, we must pass a method from Parent -> child as a prop. So child can call the parent's function when something happens(like a click).

// If the parent components's state must be changed, the parent should define the method.Child will just call it
// eg: Define Parent's method
// handleGreet = (name) => {
//   alert(`Hello ${name}`);
// };

// Pass method to child as a prop
{/* <Child greetHandler = {this.handleGreet}/> */}

// Use it in child (without para)
{/* <button onClick={props.greetHandler}>Click</button> */}
// With parameter
{/* <button onClick={() => props.greetHandler("Meera")}>Click</button>  */}