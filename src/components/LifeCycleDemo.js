import React, { Component } from 'react';
class LifeCycleDemo extends Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor: COmponent is beong created");
  }
  static getDerivedStateFromProps(props, state){
    console.log("getDerivedStateFromProps: Syncing props to state (if needed)");
    return null;
  }
  componentDidMount(){
    console.log("componentDidMount: Component mounted to the DOM");
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log("ShouldComponentUpdate: Should component re-render?");
    console.log("Next State:", nextState);
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState, snapShot){
    console.log("componentDidUpdate: Component re-rendered");
    console.log("Snapshot from getSnapshotBeforeUpdate:",snapShot);
  }

  componentWillUnmount(){
    console.log("componentWillUnmount: Component is being removed");
  }
  increment = () => {
    this.setState((prevState) => ({count: prevState.count +1}));
  };
  render(){
    console.log("Render: Component rendering");
    return (
      <div style = {{border: "2px solid #333", padding: "10px", margin: "10px"}}>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}
export default LifeCycleDemo;


// import React, { Component } from "react";
// import LifecycleDemo from "./LifecycleDemo";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { show: true };
//   }

//   toggle = () => {
//     this.setState((prevState) => ({ show: !prevState.show }));
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.toggle}>
//           {this.state.show ? "Unmount LifecycleDemo" : "Mount LifecycleDemo"}
//         </button>
//         {this.state.show && <LifecycleDemo />}
//       </div>
//     );
//   }
// }

// export default App;
