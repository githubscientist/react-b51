import React from 'react';

function Hello({ name }) {
  return (
    <p>Hello { name }!</p>
  )
}

function App() {
  return (
    <div>
      <Hello name='Sathish' />
    </div>
  )
}

export default App;