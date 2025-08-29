// HTML element => car.  remote control => React Ref
// with Ref -; focus an input field, fetch the value
// 1) createRef()
import React, { Component } from 'react'
class RefsDemo extends Component{
  constructor(props) {
    super(props)
  
    this.inputRef = React.createRef();
  }
  componentDidMount(){
    this.inputRef.current.focus();
  }
  handleClick = () => {
    alert(this.inputRef.current.value);
  };
  render(){
    return(
      <div>
        <input type="text" ref={this.inputRef}/>
        <button onClick={this.handleClick}>Show Value</button>
      </div>
    )
  }
}
export default RefsDemo;