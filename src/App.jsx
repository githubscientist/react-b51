function Hello(props) {

  console.log(props);

  return (
    <p>Hello { props.username }</p>
  )
}

function App() {
  let user1 = 'Sathish';
  let user2 = 'Krish';

  return (
    <div>
      <h1>Greetings</h1>
      <Hello username={ user1 } />
      <Hello username={ user2 } />
    </div>
  )
}

export default App;