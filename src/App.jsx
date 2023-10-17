import React, { useState } from 'react';

// child component
// receive the name as data props
function Hello({ data }) {
  return (
    <p>Hello { data }</p>
  )
}

// parent component
// data: 'Sathish'
function App() {

  const [data, setData] = useState('Sathish');

  return (
    <div>
      <Hello data={ data } />
    </div>
  )
}

export default App;