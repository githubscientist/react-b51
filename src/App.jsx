// passing data from child to parent component
import React, { useState } from 'react';

// child component
function ChildComponent({ sendDataToParent }) {
  // data to be passed to the parent component
  let message = `Hello Parent!`;

  const sendData = () => {
    sendDataToParent(message);
  }

  return (
    <div>
      <button onClick={sendData}>Send Data to Parent</button>
    </div>
  )
}

// parent component
function App() {

  // define a state to store the child data in the parent component
  const [dataFromChild, setDataFromChild] = useState('');

  const handleDataFromChild = (message) => {
    setDataFromChild(message);
  }

  return (
    <div>
      <div>Data From Child: {dataFromChild}</div>
      <ChildComponent sendDataToParent={ handleDataFromChild } />
    </div>
  )
}

export default App;