import React, { useRef, useState } from 'react';

// 3. read the notes list and render it here

function App(props) {

  // define a state to store the notes from props
  const [notes, setNotes] = useState(props.notes);

  const [showStatus, setShowStatus] = useState('all');

  // states for adding new note form
  const [newNoteContent, setNewNoteContent] = useState('');
  const [newNoteImportant, setNewNoteImportant] = useState('');

  // define a contentRef to access and manipulate the content element
  const newNoteContentRef = useRef(null);

  const addNote = (event) => {
    event.preventDefault();
    
    // create a new note object
    let noteObject = {
      id: notes.length + 1,
      content: newNoteContent,
      important: newNoteImportant == 'true',
    }

    setNotes(notes.concat(noteObject));

    // clear the inputs
    setNewNoteContent('');
    setNewNoteImportant('');

    newNoteContentRef.current.focus();
  }

  const handleStatusChange = (event) => {
    setShowStatus(event.target.value);
  }

  const filterNotes = (notes, showStatus) => {
    switch (showStatus) {
      case 'all':
        return notes;
      case 'imp':
        return notes.filter(note => note.important === true);
      case 'nonimp':
        return notes.filter(note => note.important === false);
    }
  }

  const notesFiltered = filterNotes(notes, showStatus);

  return (
    <div>
      <h1>Notes</h1>

      <label>
        <input 
          type='radio'
          name='filter'
          value='all'
          onChange={handleStatusChange}
          checked={showStatus === 'all'}
        />
        All Notes
      </label>

      <label>
        <input 
          type='radio'
          name='filter'
          value='imp'
          onChange={handleStatusChange}
        />
        Important Notes
      </label>

      <label>
        <input 
          type='radio'
          name='filter'
          value='nonimp'
          onChange={handleStatusChange}
        />
        Non-Important Notes
      </label>

      <ul>
        {
          notesFiltered.map(note => 
            <li key={note.id}>{ note.content }</li>
          )
        }
      </ul>
      <hr></hr>
      <h2>Add a New Note</h2>
      <form onSubmit={addNote}>
        <label>
          Content: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input 
            type='text'
            ref={newNoteContentRef}
            value={newNoteContent}
            onChange={e => setNewNoteContent(e.target.value)}
          />
        </label>
        <br /><br />
        <label>
          Is important: &nbsp;&nbsp;
          <select
            onChange={e => setNewNoteImportant(e.target.value)}
            value={newNoteImportant}
          >
            <option disabled>--select--</option>
            <option>true</option>
            <option>false</option>
          </select>
        </label>
        <br /><br />
        <button type='submit'>Add New Note</button>
      </form>
    </div>
  )
}

export default App;