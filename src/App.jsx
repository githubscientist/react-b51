// props drilling: props drilling occurs when you need to pass down the data through multiple nested components to reach the ones that require the data.

import React from 'react';

function GrandChildComponent({ data }) {
  console.log(`from grand child component: ${data}`);
  return (
    <div>
      <h3>Grand Child Component</h3>
    </div>
  )
}

function ChildComponent({ data }) {
  console.log(data);
  return (
    <div>
      <h2>Child Component</h2>
      <GrandChildComponent data={ data } />
    </div>
  )
}

function App() {

  const parentData = `Hello from Parent`;

  return (
    <div>
      <h2>Parent Component</h2>
      <ChildComponent data={ parentData } />
    </div>
  )
}

export default App;