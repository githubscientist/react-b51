import React, { useRef, useState } from 'react';

// 3. read the notes list and render it here

function App(props) {

  // define a state to store the notes from props
  const [notes, setNotes] = useState(props.notes);

  // states for adding new note form
  const [newNoteContent, setNewNoteContent] = useState('');

  // define a contentRef to access and manipulate the content element
  const newNoteContentRef = useRef(null);

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
      <hr></hr>
      <h2>Add a New Note</h2>
      <form>
        <label>
          Content: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input 
            type='text'
            ref={newNoteContentRef}
            value={newNoteContent}
            onChange={e => setNewNoteContent(e.target.value)}
          />
        </label>
      </form>
    </div>
  )
}

export default App;