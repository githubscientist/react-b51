/*
  useRef() definition: useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
*/

import React, { useRef } from 'react';

function App() {

  const inputRef = useRef(null);

  // print the inputRef current value
  // inputRef -> {current: input} object
  // inputRef.current -> input DOM node (element)
  // inputRef.current.value -> input DOM node value
  console.log(inputRef.current);

  const handleInputChange = () => {
    console.log(inputRef.current.value);
  }

  return (
    <div>
      <input
        type='text'
        ref={inputRef}
        onChange={handleInputChange}
      ></input>
    </div>
  )
}

export default App;