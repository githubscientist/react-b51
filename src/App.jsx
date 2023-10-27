import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import ReadNotes from './components/ReadNotes';
import CreateNote from './components/CreateNote';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  const [notes, setNotes] = useState([]);
  const [showStatus, setShowStatus] = useState('all');
  const [newNoteContent, setNewNoteContent] = useState('');
  const [newNoteImportant, setNewNoteImportant] = useState('true');
  const newNoteContentRef = useRef(null);

  const fetchNotes = async () => {
    try {
      const response = await axios.get('http://localhost:3001/notes/');
      // console.log(response.data);
      setNotes(response.data);
    } catch (error) {
      console.log('Failed to fetch notes:', error);
    }
  } 

  useEffect(() => {
    fetchNotes();
  }, []); 

  const addNote = (event) => {
    event.preventDefault();

    let noteObject = {
      id: notes.length + 1,
      content: newNoteContent,
      important: newNoteImportant == 'true',
    }

    console.log('adding a new note...');
    axios
      .post('http://localhost:3001/notes/', noteObject)
      .then(response => {
        console.log('note added successfully...');
      })

    setNewNoteContent('');
    setNewNoteImportant('');

    newNoteContentRef.current.focus();

    fetchNotes();
  }

  const handleStatusChange = (event) => {
    setShowStatus(event.target.value);
  }

  const padding = {
    paddingRight: 15,
  }

  return (
    <Router>
      <div>
        <Link to="/" style={padding}>Dashboard</Link>
        <Link to="/read" style={padding}>Read Notes</Link>
        <Link to="/create" style={padding}>Create Note</Link>
      </div>

      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/read' element={<ReadNotes showStatus={showStatus} handleStatusChange={handleStatusChange} notes={notes} />} />
        <Route path='/create' element={<CreateNote addNote={addNote} newNoteContent={newNoteContent} newNoteImportant={newNoteImportant} newNoteContentRef={newNoteContentRef} setNewNoteContent={setNewNoteContent} setNewNoteImportant={ setNewNoteImportant} />} />
      </Routes>
    </Router>
  )
}

export default App;