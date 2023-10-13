import React from 'react';
import Note from './components/Note';

function App({notes}) {

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

      <form>
        <input />
        <button onClick={() => console.log('save button clicked')}>Save Note</button>
      </form>
    </div>
  )
}

export default App;