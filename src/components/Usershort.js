import React, { Component } from 'react'
class Usershort extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       isLogged: true
    }
  }
  
  render(){
    return(
      <div>
        {this.state.isLogged && <h1>Welcome Tom</h1>}
        {!this.state.isLogged && <h1>Welcome Guest</h1>}
      </div>
    );
  }
}
export default Usershort