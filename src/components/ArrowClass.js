// Arrow Function as class Property (best way)
import React, { Component } from 'react'
class ArrowClass extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       message: "Hello"
    }
  }
  clickHandler = () =>{
    this.setState({
      message: "GoodBye!"
    });
  };
 render(){
  return(
    <div>
      <h1>{this.state.message}</h1>
      <button  onClick={this.clickHandler}>CLICK ME!</button>
    </div>
  )
 }
}
export default ArrowClass