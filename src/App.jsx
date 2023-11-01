import React from 'react';
import { createStore } from 'redux';

const noteReducer = (state = [], action) => {
  if (action.type == 'NEW_NOTE') {
    state.push(action.payload);
    return state;
  }

  return state;
}

const store = createStore(noteReducer);

store.dispatch({
  type: 'NEW_NOTE',
  payload: {
    id: 1,
    content: "Javascript is awesome!",
    important: true
  }
})

store.dispatch({
  type: 'NEW_NOTE',
  payload: {
    id: 2,
    content: "Browser can only execute Javascript",
    important: false
  }
})

function App() {

  return (
    <div>
      <ul>
        {
          store.getState().map(note => 
            <li key={note.id}>
              { note.content } <strong>{ note.important ? '★' : ''}</strong>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default App;