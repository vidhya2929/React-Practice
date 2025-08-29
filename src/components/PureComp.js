// A Pure component
// It automatically implements shouldComponentUpdate
// React compares previous props/state vs new props/state using shallow comparison
// If nothing has changed -> React skips re-render ->improves performance
import React, { Component, PureComponent } from 'react';

class PureComp extends PureComponent {
  render(){
    console.log("Pure Component Rendered");
    return <h2>Pure Component - {this.props.name}</h2>
  }
}
export default PureComp;
// If Parent passes the same prop(name), PureComp will NOT re-render