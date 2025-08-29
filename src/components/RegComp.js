// A regular component in React is the standard 'Component' class
// If a parent component re-renders, the regular child component also re-renders, even if its props haven't changed
import React, { Component } from 'react'
class RegComp extends Component{
  render(){
    console.log("Regular Component Rendered");
    return <div>Regular Component {this.props.name}</div>;
  }
}
export default RegComp// A regular class component in React does not optimize rendering
// Whenever state or props change  -> React will re-render the component, even if the new values are the same as before. Regular component always returns true for shouldComponentUpdate


