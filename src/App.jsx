import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useReducer } from 'react';

const initialState = {
  isOn: false,
  isDisabled: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return {
        isOn: !state.isOn
      }
    case 'DISABLE':
      return {
        isDisabled: !state.isDisabled
      }
    default:
      return state;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleSwitch = () => {
    if (!state.isDisabled) {
      dispatch({type: 'TOGGLE'});
    }
  }

  const toggleDisable = () => {
    dispatch({type: 'DISABLE'});
  }

  return (
    <div>
      <div
        onClick={toggleSwitch}
      >
        <FontAwesomeIcon icon={state.isOn ? faToggleOn : faToggleOff} size='2xl'/>
      </div>

      <button onClick={toggleDisable}>
        { state.isDisabled ? 'Enable' : 'Disable' }
      </button>
    </div>
  )
}

export default App;