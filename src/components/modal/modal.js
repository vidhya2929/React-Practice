import React from 'react'
import ReactDOM from 'react-dom'

function Modal({children, onClose}){
  return ReactDOM.createPortal(
    <div classsName="modal-overlay">
      <div className= "modal-content">
        {children}
        <button onClick={onClose}>CLOSE</button>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}
export default Modal;