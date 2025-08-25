import React from 'react'
// DESTRUCTURE IN FUNCTION PARAMETER

// function Destructureprops({name, heroName, children}) {
//   return (
//     <div>
//       <h1>
//         Hello {name} a.k.a {heroName}
//       </h1>
//       {children}
//     </div>
//   )
// }
// export default Destructureprops


// DESTRUCTURE INSIDE FUNCTION BODY

function Destructureprops(props){
  const{name, heroName, children} = props
  return(
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
      {children}
    </div>
  )
}
export default Destructureprops