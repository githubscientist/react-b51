import React, { useState } from 'react';
import Home from './components/Home';
import Notes from './components/Notes';
import Users from './components/Users';

function App() {

  // create a state to store the current page
  const [page, setPage] = useState('home');

  const toPage = (page) => (event) => {
    event.preventDefault();
    setPage(page);
  }

  const content = () => {
    if (page === 'home') {
      return <Home />
    } else if (page === 'notes') {
      return <Notes />
    } else if (page === 'users') {
      return <Users />
    }
  }

  // object to add padding style to the elements
  const padding = {
    padding: 5,
  }

  return (
    <div>
      <div>
        <a href='' style={padding} onClick={toPage('home')}>home</a>
        <a href='' style={padding} onClick={toPage('notes')}>notes</a>
        <a href='' style={padding} onClick={toPage('users')}>users</a>
      </div>

      {/* render the content of the component for the current set page */}
      { content() }
    </div>
  )
}

export default App;