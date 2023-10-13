import React from 'react';
import Note from './components/Note';

function App({notes}) {


  const addNote = (event) => {
    event.preventDefault();

    console.log('button clicked', event.target);
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {
          notes.map(note => 
            <Note key={ note.id } note={ note } />
          )
        }
      </ul>

      <form onSubmit={addNote}>
        <input />
        <button type='submit'>Save Note</button>
      </form>
    </div>
  )
}

export default App;