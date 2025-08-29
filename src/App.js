import logo from './logo.svg';
import './App.css';
import React from 'react';
import HelloWorld from './components/HelloWorld';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Pgreet from './components/Pgreet';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ArrowBind from './components/ArrowBind';
import ArrowClass from './components/ArrowClass';
import UserIfelse from './components/UserIfelse';
import UserTernary from './components/UserTernary';
import Usershort from './components/Usershort';
import ArrayMapCLass from './components/ArrayMapCLass';
import ArrayMapFunc from './components/ArrayMapFunc';
import Fun2 from './components/Fun2';
import Class2 from './components/Class2'
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
// import ParentStep1 from './components/PrentStep1';
import ParChild from './components/ParChild';
import Controlled from './components/Controlled';
import ParentComp from './components/ParentComp';
function App() {
  return (
    <div className="App">
      <ParentComp/>
      {/* <Controlled/> */}
      {/* <ParChild/> */}
      {/* <ParentStep1/> */}
      {/* <h1 className={styles.title}>Hello, styled with css module</h1>
      <p className={styles.subtitle}>This subtitle is also locally scoped</p> */}
      {/* <Inline/> */}
      {/* <Stylesheet/> */}
      {/* <NameList/> */}
      {/* <Class2/> */}
     {/* <Fun2/> */}
      {/* <ArrayMapFunc/> */}
      {/* <ArrayMapCLass/> */}
      {/* <Usershort/> */}
      {/* <UserTernary/> */}
      {/* <UserIfelse /> */}
      {/* <ArrowClass/> */}
      {/* <ArrowBind /> */}
      {/* <EventBind/> */}
      {/* <ClassClick/> */}
      {/* <FunctionClick/> */}
      {/* <Counter /> */}
    {/* <Message /> */}
    {/* <HelloWorld/> */}

    {/* Rendering */}
   {/* <Greet name="Bruce" heroName="Batman" />
   <Greet name="Bruno" heroName="Thor"/>
   <Greet name="Willie" heroName="Captain America"/>
   <Welcome name="Bruce" heroName="Thor"/>
   <Welcome name="Bruno" heroName="Iron Man"/>
   <Welcome name="Willie" heroName="Black Widow"/> */}

   {/* <Greet/> is used, React calls the function Greet(props) */}
   {/* <welcome/> is used,React creates an instance of the class and calls its render()method */}

   {/* <Pgreet name="Bruce" heroName="Batman">
    <p>This is children props</p></Pgreet>

    <Pgreet name="Bruno" heroName="Wonder Women">
      <button>Action</button>
    </Pgreet>

    <Pgreet name="Willie" heroName="Superman"/> */}
    </div>
  );
}
export default App;

// Whatever put between opening and closing tags of a component becoms prop.children
// props.children can be text,JSX elements, or even other components