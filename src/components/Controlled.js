import React, { useState } from 'react'
function Controlled(){   //functional component
  const [text, setText] = useState("");  //state variable text and updater setText and useState('') initializes text to an empty string. Text holds the current input value.

  return(
    <div>
     <input type="text" value ={text} onChange={(e) => setText(e.target.value)} placeholder="Type Something..." />
     <p>You Typed: {text}</p>
    </div>
  )
}
// 