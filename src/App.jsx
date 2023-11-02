import { faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

function App() {

  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  return (
    <div>
      <div>
        <button onClick={() => setLike(like + 1)}>{<FontAwesomeIcon icon={faThumbsUp} size='2xl'/>}</button>
        &nbsp;&nbsp;&nbsp;<span>{ like }</span>
      </div>
      <p></p>
      <div>
        <button onClick={() => setDislike(dislike + 1)}>{<FontAwesomeIcon icon={faThumbsDown} size='2xl'/>}</button>
        &nbsp;&nbsp;&nbsp;<span>{dislike}</span>
      </div>
    </div>
  )
}

export default App;