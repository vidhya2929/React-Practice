// In class components, we use this.state to store data that can change over time ans should cause the component to re-render when it changes.
this.state = {
  count: 0
}
// It starts with an initial value (0).It will change when the user hovers.Whenever it changes, we want the component to re-render and show the new count. if we didn't use 'state', react would not know when to update the UI.

// Where to add -;
// belongs to the component,changes over time snd affects what is shown in the UI.

// In class Component, we can't update state directly like -; this.state.count = this.state.count + 1;
// So 'setState' is a method Raect gives class components to update state and trigger a re-render.
// we give an object with the new state values.React merges that object with the existing state.Then the React re-renders the component with the new state.
// Object form: 
this.setState({count: this.state.count +1}) 
// Use above when the new state does NOT depend on the old state

// Function Form
this.setState(prevState => ({ count: prevState.count + 1}))
// Use this when the new state depends on the previous state value(like incrementing)

// this.state => holds data that changes
// this.setState => updates state and re-renders.
// Use prevState version => when new value depends on old one.

// HOC => Higher Order Function 
const hocFunction = (OriginalComponent) => {
  class NewComponent extends React.Component {
    render(){
      return <OriginalComponent {...this.props}/>
    }
  }
  return NewComponent;
};
// OriginalComponent => The component you pass in
// NewComponent => The enhanced component with added logic.
// {...this.props} => Passes props down so nothing is lost. 


// React is like colouring book.react gives us two types of crayons 
// Functional Components (Stateless/Dumb)
// plain crayons -;they just draw something when you tell them.They don't remember anything.
// eg: 
function Greet(props){
  return <h1>Hello {props.name}</h1>;
}
// Class Components => magical crayons -; they can draw and remember things
import react, { React} from 'react';
class Welcome extends Component{
  constructor(props) {
    super(props)
    this.state = {
       count : 0
    }
  }
  render(){
    return <h1>Hello {this.props.name}, count is {this.state.count}</h1>
  }
}