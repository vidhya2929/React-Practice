import React from 'react'
function Inline(){
  const heading = {
    fontSize: "20px",
    color: "yellow",
    textAlign:"center",
    padding: "20px"
  };
  return(
    <div>
      <h1 style={heading} >
        This is Inline Styling in React
      </h1>
    </div>
  )
}
export default Inline