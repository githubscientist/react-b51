import React, { useReducer, useState } from 'react';
import { initialState, reducer } from './reducers/countReducer';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>Counter: { state.count }</h3>
      <button onClick={() => dispatch({ type: 'incr' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decr' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>

      <h4>Clicks History</h4>
      <p>{  }</p>
    </div>
  )
}

export default App;