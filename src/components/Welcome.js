// Create a class component Welcome that accepts name and heroName as props and renders:
import React, { Component } from 'react'
class Welcome extends Component{
  render(){
  return(
<h1>Welcome {this.props.name} a. k. a{this.props.heroName}</h1>
  )
}
} 
export default Welcome
// In a class component, props are accessed with this.props