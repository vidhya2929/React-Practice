import React from 'react'
function ChildPar({onIncrement}){
  return(
    <div style={{border: "1px solid #ccc",padding:12}}>
      <h2>Step 1: Parent controls state</h2>
      <p>Count : {this.state.count}</p>
      <button onClick={this.increment}></button>
    </div>
  )
}
export default ChildPar;