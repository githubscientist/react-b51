// useRef hook: 
/*

  - It's a react's built in feature
  - To create and manage references of DOM elements
  - We can manipulate the element using the reference
  without any unnecessary re-renders

*/
import React, { useRef } from 'react';

function App() {

  // create a reference using useRef hook
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    // console.log(inputRef.current.value);
    // inputRef.current.value = 'sathish';
    inputRef.current.focus();
  }

  return (
    <div>
      <input 
        type='text'
        placeholder='type a note...'
        ref={inputRef}
      />

      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  )
}

export default App;