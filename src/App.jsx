import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useReducer } from 'react';

/*
  useReducer: useReducer is a hook that is used for state management.

  useReducer uses reducers which helps us to keep the states and actions separated.

  useReducer uses an initial state and returns the current state and a dispatch function.
*/

const initialState = {
  isOn: false
}

/*
  At the beginning:
    state = initialState = {isOn: false}
  
  After buttonClick: 
    dispatch gets called with action = {type: 'TOGGLE'}

    reducer gets called with state = initialState and action = {type: 'TOGGLE'}

    matching case 'TOGGLE' gets executed and it returns the new state.
    new state is an object
    {
      isOn: true
    }

    returned object is assigned to state and state becomes
    state = {
      isOn: true
    }
*/

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return {
        isOn: !state.isOn
      }
    default:
      return state;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleSwitch = () => {
    dispatch({type: 'TOGGLE'});
  }

  return (
    <div
      onClick={toggleSwitch}
    >
      <FontAwesomeIcon icon={state.isOn ? faToggleOn : faToggleOff} size='2xl'/>
    </div>
  )
}

export default App;