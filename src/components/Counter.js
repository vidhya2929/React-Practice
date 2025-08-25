// creates a counter  that increases when the user clicks a button
import React, { Component } from 'react'

export class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }
  increment(){
    this.setState({
      count: this.state.count + 1
      // here we are inside JavaScript, not JSX
      // 'this.state' is just a JavaScript object
      // To access the value, we use dot notaion ->this.state.count
    })
  }
  
  render() {
    return (
      <div>
        <h1>Count - {this.state.count}</h1>
        <button onClick={ () => this.increment()}>Increment</button>
      </div>
    )
  }
}

export default Counter
//  Count is stored in state (starts at 0).
// When the button is clicked -> increment() runs
// setState() updates count to count + 1
// React re-renders the component and shows the updated count.

