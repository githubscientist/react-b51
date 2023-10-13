import React from 'react';

function Note({ note }) {

    if (note.important) {
        return (
          <li>{ note.content } ✯ </li>  
      )
    }

  return (
    <li>{ note.content }</li>  
  )
}

export default Note;