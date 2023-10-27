import React, { useState } from 'react';
import DeleteForm from './DeleteForm';

function DeleteNote({ notes, setNotes, fetchNotes }) {

    const [selectedID, setSelectedID] = useState('select an ID');

    const selectIDHandler = (event) => {
        // console.log(event.target.value);
        setSelectedID(event.target.value);
    }

  return (
      <div>
          <h2>Delete Note</h2>
          <label>
              Select the Note ID to Delete: &nbsp;&nbsp;
              <select
                  value={selectedID}
                  onChange={selectIDHandler}
              >
                  <option>{'select an ID'}</option>
                  {
                      notes.map(note => 
                          <option key={note.id}>{ note.id }</option>
                      )
                  }
              </select>
          </label>

          <div>
              {
                  selectedID !== 'select an ID' &&
                  <DeleteForm 
                      selectedID={selectedID}
                      notes={notes}
                      setNotes={setNotes}
                      fetchNotes={ fetchNotes}
                  />
              }
          </div>
    </div>
  )
}

export default DeleteNote;