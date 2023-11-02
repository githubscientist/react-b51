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
    console.log('fetching posts...');
    const response = axios.get('https://jsonplaceholder.typicode.com/posts');
    
    setTimeout(() => {
      console.log('posts fetched');
      console.log(response);
    }, 3000);
  }

  return (
    <div>
      <button onClick={fetchPosts}>Fetch Posts</button>
    </div>
  )
}

export default App;