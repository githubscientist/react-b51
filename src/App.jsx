import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import ReadNotes from './components/ReadNotes';
import CreateNote from './components/CreateNote';

function App() {

  // define a state to store the notes from props
  const [notes, setNotes] = useState([]);

  const [showStatus, setShowStatus] = useState('all');

  // states for adding new note form
  const [newNoteContent, setNewNoteContent] = useState('');
  const [newNoteImportant, setNewNoteImportant] = useState('true');

  // define a contentRef to access and manipulate the content element
  const newNoteContentRef = useRef(null);

  const fetchNotes = async () => {
    try {
      const response = await axios.get('http://localhost:3001/notes/');
      setNotes(response.data);
    } catch (error) {
      console.log('Failed to fetch notes:', error);
    }
  } 

  useEffect(() => {
    newNoteContentRef.current.focus();
  }, []); 

  useEffect(() => {
    fetchNotes();
  }, []); 

  const addNote = (event) => {
    event.preventDefault();
    
    // create a new note object
    let noteObject = {
      id: notes.length + 1,
      content: newNoteContent,
      important: newNoteImportant == 'true',
    }

    // setNotes(notes.concat(noteObject));
    console.log('adding a new note...');
    axios
      .post('http://localhost:3001/notes/', noteObject)
      .then(response => {
        console.log('note added successfully...');
      })

    // clear the inputs
    setNewNoteContent('');
    setNewNoteImportant('');

    newNoteContentRef.current.focus();

    fetchNotes();
  }

  const handleStatusChange = (event) => {
    setShowStatus(event.target.value);
  }

  return (
    <div>
      <ReadNotes showStatus={showStatus} handleStatusChange={handleStatusChange} notes={ notes } />
      <hr></hr>
      <CreateNote addNote={addNote} newNoteContent={newNoteContent} newNoteImportant={newNoteImportant} newNoteContentRef={newNoteContentRef} setNewNoteContent={setNewNoteContent} setNewNoteImportant={ setNewNoteImportant} />
    </div>
  )
}

export default App;