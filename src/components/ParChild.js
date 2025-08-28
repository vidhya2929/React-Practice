import React, { Component } from 'react'
import ChildPar from './ChildPar';
export class ParChild extends Component {
  state = {count: 0}
  increment = () => {
    this.setState(prev => ({count: prev.count + 1}));
  };
  render() {
    return (
      <div style={{border: '1px solid #ccc', padding: 12}}>
        <h1>Step2</h1>
        <p>Count: {this.state.count}</p>
        <ChildPar onIncrement={this.increment}/>
      </div>
    );
  }
}

export default ParChild
