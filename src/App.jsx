// useReducer: Its a hook that is built-in within the react library and it is used for managing more complex state logic in your components.
import React, { useReducer } from 'react';

// 1. define initialState
const initialState = {
  value: '',
}

// 2. define reducer
const inputReducer = (state, action) => {
  switch (action.type) {
    case 'change': 
      return { value: action.payload }
    default:
      return state;
  }
}

function App() {

  // 3. get the state + dispatcher
  const [state, dispatch] = useReducer(inputReducer, initialState);

  return (
    <div>
      <input 
        type='text'
        placeholder='type something...'
        onChange={e => dispatch({ type: 'change', payload: e.target.value })}
      />

      <p>You typed: { state.value }</p>
    </div>
  )
}

export default App;