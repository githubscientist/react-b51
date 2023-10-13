const Hello = (props) => {

  console.log(props);

  return (
    <p>Hello {props.name}, you are { props.age } years old</p>
  )
}

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