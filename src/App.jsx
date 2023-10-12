function App() {
  const now = new Date();

  // simple addition
  const a = 10;
  const b = 20;

  return (
    <div>
      <p>Hello world, it is {now.toString()} </p>
      
      <p>
        {a} plus {b} is { a + b }
      </p>
    </div>
  )
}

export default App;