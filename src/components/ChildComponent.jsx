import React, { useContext } from 'react';
import GrandChildComponent from './GrandChildComponent';
import { MessageContext } from '../App';

// child component wrapped inside the parent component
// receive the data message from the App: parent component as props
function ChildComponent() {

    // const { message, coins } = useContext(MessageContext);

  return (
      <MessageContext.Consumer>
          {(data) => (
              <div>
                <h2>Child Component</h2>
                <p>Message from Parent: { data.message }</p>
                <hr></hr>
                <GrandChildComponent />
            </div>
          )   
          }
      </MessageContext.Consumer>
  )
}

export default ChildComponent;