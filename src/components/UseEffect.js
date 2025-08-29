useEffect(() =>{
  console.log("Runs on every render")
});
const[count, setCount] = useState(0);
useEffect(()=>{
  setCount(count + 1);
},[count])   //infinite loop
// use conditionals,or functional updates:
useEffect(() =>{
  if(count < 5){
    setCount(prev => prev + 1);
  }
},[count]);
// Problems with useState
const [user, setUser] = useState({name: "Harry", age: 20});
user.age = 21 // won't trigger re-render
// correct way -; Always create a new object
setUser(prev => ({...prev, age: 21}));
// 
const [ceount,setCeount] = useState(0)
setCeount(count + 1);
console.log(count); //  ❌ still old value
// ✅
setCeount(prev => prev + 1);
// No batching updates 
setCeount(count + 1);
setCeount(count + 1);    // ❌ still +1, not +2

setCeount(prev => prev +1);
setCeount(prev => prev +1);  //now +2
// Replaceing instead of merging
const [useer, setUseer] = useState({name: "Riya", age: 20})
setUser({name: "Paul"}) // here age is lost
// so
setUseer(prev => ({...prev, name: "Paul"}));


// HOC is a function that takes a component and returns a new component with extra functionality
import React, { component} from 'react';
const withCounter = (WrappedComponent, incrementNumber = 1)=> {
  class WithCOunter extends Component {
    constructor(props){
      super(props);
      this.state = {count: 0};
    }
    incrementCount = () => {
      this.setState(prevState => ({ count: prevState.count + incrementNumber}))
    };
    render(){
      return (
        <WrappedComponent
        count = {this.state.count}
        incrementCOunt = {this.incrementCount}
        {...this.props}/>
      )
    }
  }
  return withCounter;
};
export default withCounter;
