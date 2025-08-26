// // In class component, when you call a method inside an event, sometimes 'this' is 'undefined'
// // So we need to bind the event handler to the class instance
import React, { Component} from 'react'                                                                                   // (1)

class EventBind extends Component{
  constructor(props){
    super(props)

    this.state = {
      message: "Hello"
    }
    this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler(){
    this.setState({
      message: "GoodBye!"
    })
    console.log(this)
  }
  render(){
    return(
      <div>
        <h1>{this.state.message}</h1>
        {/* Without binding -> this becomes undefined */}
        <button onClick={this.clickHandler}>Click</button>
        {/* Without binding -> 'this' is undefined, because the function loses its context when React calls it
        With binding -> 'this' always refers to your component instance */}
      </div>
    )
  }
}
export default EventBind




// Why Binding is needed
// In Js classes, methods are not bound to instances by default
// So this.clickHandler loses its context when passed as an event handler
// That's why we .bind(this) in constructor


// WAYS to Fix Event Binding in React:
// 1) Binding in Constructor(best for performance)
// this.clickHandler = this.clickHandler.bind(this)

// 2) Arrow Function in Render(works but may cause performance issues.)
{/* <button onClick={() => this.clickHandler()}>Click</button> */}

// 3)Arrow FUnction as a Class Property(most modern & clean)
// clickHandler = ()=>{
//   this.setState({message:'GoodBye!'})
// }

