function Hello() {
  return (
    <p>Hello world</p>
  )
}

function App() {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello />
      <Hello />
      <Hello />
      <Hello />
    </div>
  )
}

export default App;