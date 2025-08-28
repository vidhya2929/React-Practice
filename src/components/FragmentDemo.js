// fragments can accept key when used in lists.
// Fragments group children without adding extra nodes.

import React from 'react'
function FragmentDemo(){
  return (
    <React.Fragment>
      <h1>Fragments Demo</h1>
      <p>This avoids extra divs in the DOM</p>
    </React.Fragment>
  );
}
export default FragmentDemo;

// Short Syntax
function FragmentDemo(){
  return(
    <>
    <h1>Fragments Demo</h1>
    <p>This avoids extra divs in the DOM</p>
    </>
  )
} //This method can't take a key or attributes
// If you  need a key, you must use <React.Fragment>

// Using Fragments with Lists

function ItemList(){
  const items = ["Apple", "Banana", "Orange"];
 return items.map(item, index =>(
  <div key={index}>
    <h2>{item}</h2>
    <p>Fruit item</p>
  </div>
 ));
}
// React.Fragment
function ItemList(){
  const items = ["Apple", "Banana", "Orange"];
  return items.map((item, index)=>(
    <React.Fragment key={index}>
      <h2>{item}</h2>
      <p>Fruit item</p>
    </React.Fragment>
  ))
}
// Practical Use Cases
// Returning multiple table rows

function Table(){
  const rows = [
    {id: 1, name: "John", age: 25},
    {id: 2, name: "sara", age: 30},
  ];
  return (
    <table>
      <tbody>
       {rows.map((row)=>(
        <React.Fragment key={row.id}>
          <tr>
            <td>{row.name}</td>
            <td>{row.age}</td>
          </tr>
        </React.Fragment>
       ))}
      </tbody>
    </table>
  );
}
// Returning multiple siblings in a component
function UserInfo({user}){
  return (
    <>
    <h1>{user.name}</h1>
    <p>Email: {user.email}</p>
    </>
  );
}

function Dashboard(){
  return (
    <>
    <Header />
    <Sidebar/>
    <Content />
    <Footer/>
    </>
  );
}

// Things to remember =;
// Shorthand(<>.....</>) cannot take keys or props.
// Use <React.Fragment key={...}> when rendering lists
// Fragments do not render anything in the DOM.
