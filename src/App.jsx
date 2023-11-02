/*
  useRef variable changes do not cause a re-render of the component.
*/

import React, { useRef, useState } from 'react';

function App() {

  const renderCount = useRef(0);
  const [count, setCount] = useState(0);

  // console.log(renderCount);

  const increment = () => {
    renderCount.current++;
    setCount(count + 1);
  }

  return (
    <div>
      <p>Render count: { renderCount.current }</p>
      <button onClick={ increment }>Increment</button>
      </div>
  )
}

export default App;