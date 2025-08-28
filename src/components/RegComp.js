// A regular component in React is the standard 'Component' class
// If a parent component re-renders, the regular child component also re-renders, even if its props haven't changed
import React, { Component } from 'react'
class RegComp extends Component{
  render(){
    console.log("Regular Component Rendered");
    return <div>Regular Component {this.props.name}</div>;
  }
}
export default RegComp
