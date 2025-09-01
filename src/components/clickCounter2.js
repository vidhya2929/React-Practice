import React, { Component } from 'react'

 class clickCounter2 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }
  incrementCount = () =>{
    this.setState(prevState =>{
      return{count: prevState.count +1}
    })
  }
  
  render() {
    return <button onClick={this.incrementCount}>Clicked X times</button>
  }
}

export default clickCounter2
