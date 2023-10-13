import Hello from "./components/Hello";

const App = () => {

  const age = 25;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Sathish' age={10 + 20} />
      <Hello name='Krish' age={ age } />
    </div>
  )
}

export default App;