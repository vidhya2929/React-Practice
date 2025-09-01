// import React, { Component } from 'react'

//  class ClickCounter extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        count: 0
//     }
//   }
//   incrementCount = () => {
//     this.setState(prevState => {
//       return{count : prevState.count + 1}
//     })
//   }
  
//   render() {
//     const { count } = this.state
//     return <button onClick={this.incrementCount}>Clicked {count} times</button>

//   }
// }

// export default ClickCounter


// Refactor clickCounter.js
import react,  { Component } from 'react'
import withCounter from './withCounter';

class ClickCounter extends Component{
  render(){
    const { count,incrementCount } = this.props;
    return(
      <button onClick={incrementCount}>Clicked {count} times</button>
    );
  }
}
export default withCounter(ClickCounter, 1);