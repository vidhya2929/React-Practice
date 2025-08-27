import React, {useState} from 'react'

import './style.css'

function Stylesheet(){
  const[iscolor,setIscolor] = useState(true);
  let className = iscolor ? "color": "second";
  return (
    <div>
      {/* <h1 class='color'>Hey,Let's partyyyyy....</h1> */}
      <h1 className = {className}>
      {iscolor ? "Color applied" : "second applied"}
      </h1>
      <button onClick={() => setIscolor(!iscolor)}>Toggle Style</button>
    </div>
  );
}
export default Stylesheet

// useState(true) -> Track whether the style should be 'color' or 'second'
// iscolor = true ->use color
// iscolor = false -> use second
// <h1 className = {className}> -> Instead of hardcoding a CSS class, we inject a variable into className.