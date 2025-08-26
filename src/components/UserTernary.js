// Using Ternary Operator
import React, { Component } from 'react';
class UserTernary extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLogged: true
    }
  }
  render(){
    return(
      <div>
        {this.state.isLogged ? <h1>Welcome Harry</h1> : <h2>Welcome Guest</h2>}
      </div>
    );
  }
  
}
export default UserTernary;