import React,  { Component } from 'react'
import RegComp from './RegComp';
import PureComp from './PureComp'
class ParentComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: "Harry"
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Harry"
      });
    }, 2000);
  }
  
  render(){
    console.log("**************Parent Component Rendered******************");
    return(
      <div>
        <h1>Parent Component</h1>
        <RegComp name={this.state.name}/>
        <PureComp name = {this.state.name}/>
      </div>
    )
  }
}
export default ParentComp