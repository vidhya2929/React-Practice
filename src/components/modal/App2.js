import React, {useState} from 'react'
import Modal from './Modal'

function App(){
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <h1>React Portal Example</h1>
      <button onClick = {() => setShowModal(true)}>Open Modal</button>

    {showModal && (
      <Modal onCLose ={() => setShowModal(false)}>
        <h2>This is a Modal Using React Portal</h2>
      </Modal>
    )}
    </div>
  );
}
export default App;
