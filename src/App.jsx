import React, { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);
  const [clicksHistory, setClicksHistory] = useState([]);

  const incrementHandler = () => {
    if (count < 10) {
      setCount(count + 1);
      setClicksHistory(clicksHistory.concat('Incr'));
    }
  }

  const decrementHandler = () => {
    if (count > 0) {
      setCount(count - 1);
      setClicksHistory(clicksHistory.concat('Decr'));
    }
  }

  const resetHandler = () => {
    setCount(0);
    setClicksHistory(clicksHistory.concat('Reset'));
  }

  return (
    <div>
      <h3>Counter: { count }</h3>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={resetHandler}>Reset</button>

      <h4>Clicks History</h4>
      <p>{ clicksHistory.join(' ') }</p>
    </div>
  )
}

export default App;