// CLASS COMPONENT DESTRUCTURING
import React, { Children, Component } from 'react'

class DesPropClass extends Component{
  render(){
    const {name, heroName, children} = this.props
    return(
      <div>
        <h1>Welcome {name} a.k.a {heroName}</h1>
        {Children}
      </div>
    )
  }
}
export default DesPropClass
