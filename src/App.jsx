import React, { useEffect, useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const handleChange = () => {
    setCount(count + 1);
  }

  console.log(count);

  return (
    <div>
      <h2>Document Title Change</h2>
      <button onClick={handleChange}>Change Count</button>
    </div>
  )
}

export default App;