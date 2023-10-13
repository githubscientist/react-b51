import React from 'react';
import Note from './components/Note';

function App({notes}) {

  function handleSaveClick() {
    console.log('save button clicked');
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

      <form>
        <input />
        <button onClick={handleSaveClick}>Save Note</button>
      </form>
    </div>
  )
}

export default App;