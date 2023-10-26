import React, { useState } from 'react';

// 3. read the notes list and render it here

function App(props) {

  // define a state to store the notes from props
  const [notes, setNotes] = useState(props.notes);

  return (
    <div>
      <h1>Notes</h1>

      <ul>
        {
          notes.map(note => 
            <li key={note.id}>{ note.content }</li>
          )
        }
      </ul>
    </div>
  )
}

export default App;