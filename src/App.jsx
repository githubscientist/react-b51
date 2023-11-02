import axios from 'axios';
import React from 'react';

/*
  axios: 
    axios is a library that helps us to make http requests.
    It returns a promise.
    axios will internally use fetch api to make http requests.
  
  we can handle axios calls in two ways:
    1. using async await -> asynchronous (but internally it is synchronous because of await keyword)
    2. using then and catch -> synchronous
  
  synchronous: the statements are executed line by line.
  asynchronous: the statements are not executed line by line or in the background one by one.

  to install: npm install axios
*/

function App() {

  const fetchPosts = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        console.log(response.data);
        ;
      })
      .catch((error) => {
        console.log('error fetching posts...', error);
      })
  }

  return (
    <div>
      <button onClick={fetchPosts}>Fetch Posts</button>
    </div>
  )
}

export default App;