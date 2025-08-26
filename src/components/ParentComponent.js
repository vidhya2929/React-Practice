import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

 class ParentComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message : "Hello from Parent"
    };
    this.greetParent = this.greetParent.bind(this)
  }
  gretParent(childName){
    alert(`Hello ${this.state.message}, from ${childName}`);
  }
  
  render() {
    return (
      <div>
        <childComponent greetHandler= {this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent
