/*
  Hooks: 
    - any function that starts with "use" is called a hook
    - they are special functions that are available only while React is rendering.

    To create a counter, where the value is increased as a function of time or at the click of a button.
*/

import React, { useState } from 'react';
import Display from './components/Display';
import Button from './components/Button';

function App() {

  const [counter, setCounter] = useState(0);

  function handlePlusClick() {
    setCounter(counter + 1);
  }

  function handleMinusClick() {
    setCounter(counter - 1);
  }

  function handleZeroClick() {
    setCounter(0);
  }

  return (
    <div>
      <Display counter={ counter } />
      <Button handleClick={ handlePlusClick } name='plus' />
      <Button handleClick={ handleMinusClick } name='minus' />
      <Button handleClick={ handleZeroClick } name='zero' />
    </div>
  )
}

export default App;