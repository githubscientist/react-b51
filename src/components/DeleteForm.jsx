import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function DeleteForm({ selectedID, notes, setNotes, fetchNotes }) {

    let selectedNote = notes.find(note => note.id == selectedID);
    const navigate = useNavigate();

    const deleteNote = async () => {
        console.log('deleting note...');
        try {
            const response = await axios.delete(`http://localhost:3001/notes/${selectedID}`);
            console.log('note deleted successfully...');

            // fetch all the notes again
            fetchNotes();

            navigate('/read');


        } catch (error) {
            console.log('Error deleting note:', error);
        }
    }

    // console.log(selectedNote);

  return (
      <div>
          <br /><br />
          <label>
              <p><strong>ID: </strong>{ selectedNote.id} </p>
              <p><strong>Content: </strong>{ selectedNote.content}</p>
              <p><strong>Important: </strong>{ selectedNote.important ? 'true' : 'false'}</p> 
          </label>
          <br />
          <button onClick={deleteNote}>Delete Note</button>
    </div>
  )
}

export default DeleteForm;