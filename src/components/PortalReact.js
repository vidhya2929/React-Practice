// REACT PORTALs
// By default, react are rendererd inside the root DOM node
// sometimes we need to render a component outside the root hierarchy -> for modals,tooltips.popups,dropdown
// Syntax -;
ReactDOM.createPortal(Child, container) //Child => Any valid React node(JSX,text,fragment,component), container => DOM node where you want to render it(outside root)
import React from 'react'
import ReactDOM from 'react-dom'
function PortalDemo(){
  return ReactDOM.createPortal(
    <h1>This is rendered using a Portal!</h1>,
    document.getElementById("portal-root")
  );
}
export default PortalDemo;
// Modals/Dialog Boxes => Modals often need to escape parent's overflow: hidden or z-index css issues
// ToolTips/Popovers  => Positioning is easier when they are rendered at the top level.
// Dropdowns/Menus  =>Avoid clipping inside parent containers.


// Render outside DOM hierarchy but inside React tree