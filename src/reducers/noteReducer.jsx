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

export const createNote = (content, n) => {
    return {
        type: 'NEW_NOTE',
        payload: {
            content,
            id: n + 1,
            important: false,
        }
    }
}

export const toggleImportanceOf = (id) => {
    return {
        type: 'TOGGLE_IMPORTANCE',
        payload: {
            id: id,
        }
    }
}

export default noteReducer;