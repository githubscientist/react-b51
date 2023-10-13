import React from 'react';
import Note from './components/Note';
import './styles/App.css';

function App({notes}) {

  return (
    <div>
      <h1>Notes</h1>
      <ul id='list'>
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