import React from 'react';

function ReadNotes({ showStatus, handleStatusChange, notes }) {

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
    </div>
  )
}

export default ReadNotes;