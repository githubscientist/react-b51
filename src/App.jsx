import { faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

function App() {

  const [value, setValue] = useState({
    likes: 0,
    dislikes: 0
  });

  const handleLikeButton = () => {
    setValue({
      ...value,
      likes: value.likes + 1,
    });
  }

  const handleDislikeButton = () => {
    setValue({
      ...value,
      dislikes: value.dislikes + 1,
    });
  }

  return (
    <div>
      <div>
        <button onClick={handleLikeButton}>{<FontAwesomeIcon icon={faThumbsUp} size='2xl'/>}</button>
        &nbsp;&nbsp;&nbsp;<span>{ value.likes }</span>
      </div>
      <p></p>
      <div>
        <button onClick={handleDislikeButton}>{<FontAwesomeIcon icon={faThumbsDown} size='2xl'/>}</button>
        &nbsp;&nbsp;&nbsp;<span>{ value.dislikes }</span>
      </div>
    </div>
  )
}

export default App;