import React from 'react';
import GrandChildComponent from './GrandChildComponent';

// child component wrapped inside the parent component
// receive the data message from the App: parent component as props
function ChildComponent({ message, coins }) {
  return (
      <div>
          <h2>Child Component</h2>
          <p>Message from Parent: { message }</p>
          <hr></hr>
          <GrandChildComponent message={message} coins={ coins } />
    </div>
  )
}

export default ChildComponent;