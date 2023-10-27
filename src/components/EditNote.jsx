import React, { useState } from 'react';
import UpdateForm from './UpdateForm';

function EditNote({ notes, setNotes, fetchNotes }) {

    const [selectedID, setSelectedID] = useState('select an ID'); 

    const selectIDHandler = (event) => {
        // console.log(event.target.value);
        setSelectedID(event.target.value);
    }

  return (
      <div>
          <h2>Edit Note</h2>
          <label>
              Select the Note ID to Edit &nbsp;&nbsp;
              <select value={selectedID} onChange={selectIDHandler}>
                  <option>{'select an ID'}</option>
                  {
                      notes.map(note => 
                          <option key={note.id}>{ note.id }</option>
                      )
                  }
              </select>
          </label>

          <div>
              {selectedID !== 'select an ID' && <UpdateForm
                  selectedID={selectedID}
                  notes={notes}
                  setNotes={setNotes}
                  fetchNotes={ fetchNotes}
              />}
          </div>
    </div>
  )
}

export default EditNote;