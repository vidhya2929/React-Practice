// Arrow Function in render
import React, { Component } from 'react'
class ArrowBind extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       message: "Hai!"
    }
  }
  clickHandler(){
   this.setState({
    message: "Bye!"
   })
  }
  
  render(){
    return(
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() =>this.clickHandler()}>Click</button>
      </div>
    )
  }
}
export default ArrowBind