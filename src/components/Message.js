// // create a Message component that uses "state" to display a message and update it when a button is clicked
// import React, { Component } from 'react'

// export class Message extends Component {
  
//   constructor() {
//     super()
//   // We pass 'props' to constructor when the state or methods in the component need to use data coming from the parent,
//   // If not needed -> just super() is enough
//     this.state = {
//        message: 'Welcome Visitor'
//     }
//   }
//   changeMessage(){
//     this.setState({
//       message: 'Thank You For Subscribing!'
//     })
//   }
//   // this.setState() is a special React function.
//   // It tells the React: "Update the state with this new value, and re-renders the component"

//   // After setState,React calls render() again automatically.Now this.state.message has the updated value
//   render() {
//     return (
//       <div>
//         <h1>{this.state.message}</h1>
//         <button onClick={ () => this.changeMessage()}>Subscribe</button>
//         {/* when the button clicks , it calls the function */}
//       </div>
//     )
//   }
// }
// // render runs whenever the component needs to show something on the screen

// export default Message

// // state => used to hold component-specific data.
// // Initially -> this.state.message = "Welcome Visitor".
// // When the button is clicked -> this.setState() updates the message to "Thank you for subscribing!".
// // react automatically re- renders the UI when state changes
