// Conditional Rendering
// IfElse
import React, { Component } from 'react'
class UserIfelse extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       isLogged:false
    }
  }
  render(){
    if(this.state.isLogged){
      return <h1>Welcome Harry</h1>;
    }
    else{
      return <h1>Welcome Guest</h1>;
    }
  }
}
export default UserIfelse