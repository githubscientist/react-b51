import React, { useRef } from 'react';

function App() {

  // get the reference of the button
  const buttonRef = useRef(null);

  const changeColor = () => {
    // console.log('change color button clicked!');
    // console.log(buttonRef.current);
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'black', 'brown', 'orange', 'white'];
    const randomColor = colors[Math.floor(Math.random()*10)];
    console.log(randomColor);
    buttonRef.current.style.backgroundColor = randomColor;
  }

  return (
    <div>
      <h3>Background Color Switcher</h3>
      <button onClick={changeColor} ref={buttonRef}>Change Color</button>
    </div>
  )
}

export default App;