import React, {Component } from 'react';
const withCounter = (WrappedComponent, incrementNumber = 1) =>{
  // withCounter => It is a factory function. WrappedComponent => give it a toy,it gives back a NEW toy with extra powers
  class WithCounter extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        count: 0
     }
   }
   incrementCount = () =>{
    this.setState(prevState => ({
      count: prevState.count + incrementNumber
    }));
   }
   render(){
    return (
      <WrappedComponent 
      count = {this.state.count}
      incrementCount = {this.incrementCount}
      {...this.props}/>
    );
   }
  }
  return WithCounter;
}
export default withCounter