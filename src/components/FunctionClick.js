// Create a button and show a message in the console when it is clicked
import React from 'react'

function FunctionClick() {

  function handleClick(){
    console.log("Button clicked!")
  }
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default FunctionClick

// React uses camelCase(onClick) instead of lowecase(onclick like in plain HTML)

// ❌ onClick={handleClick()} ->because that would execute immediately, not wait for a click