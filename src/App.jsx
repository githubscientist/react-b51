// props drilling: passing the props from the parent component to the nested child components through multiple levels
import React, { useState } from 'react';
import ChildComponent from './components/ChildComponent';

// parent component: App
function App() {

    // this message should be rendered inside the grandchild component
    const [message, setMessage] = useState('Hello, Grand Child!');
    const [coins, setCoins] = useState([1, 2, 3, 4, 5]);

  return (
      <div>
          <h1>Parent Component</h1>
          <hr></hr>
          <ChildComponent message={message} coins={ coins } />
    </div>
  )
}

export default App;