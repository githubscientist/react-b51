import React from 'react';
import { createStore } from 'redux';

const noteReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_NOTE':
      return state.concat(action.payload);
    
    case 'TOGGLE_IMPORTANCE':
      // get the id from the action.payload
      const id = action.payload.id;

      // get the current state's object matching the id
      const noteToChange = state.find(n => n.id === id);

      // make the necessary changes
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important,
      }

      // return the new object
      return state.map(note => 
          note.id !== id ? note : changedNote
        )
    
    default:
      return state;
  }
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

store.dispatch({
  type: 'TOGGLE_IMPORTANCE',
  payload: {
    id: 2,
  }
})

store.dispatch({
  type: 'TOGGLE_IMPORTANCE',
  payload: {
    id: 1,
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