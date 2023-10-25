import React, { useRef } from 'react';

function App() {

  // get the reference of the button
  const bodyRef = useRef(document.body);

  const changeColor = () => {
    console.log(bodyRef.current);
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'black', 'brown', 'orange', 'white'];
    const randomColor = colors[Math.floor(Math.random()*10)];
    bodyRef.current.style.backgroundColor = randomColor;
  }

  return (
    <div>
      <h3>Background Color Switcher</h3>
      <button onClick={changeColor}>Change Color</button>
    </div>
  )
}

export default App;