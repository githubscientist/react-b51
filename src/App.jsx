/*
  useEffect Hook:
    - useEffect hook is used in functional components in React to manage the side effects [data fetching, DOM manipulation, subscriptions].
*/

import React, { useEffect, useState } from 'react';

function App() {

  // create a state to store the data fetched from the API
  const [posts, setPosts] = useState(null);

  const fetchPosts = async () => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    let data = await response.json();
    setPosts(data);
  }

  // data has to be fetched
  // the following will run only once
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>API DATA</h2>
      {
        posts ? (
          <ul>
            {
              posts.map(post => 
                <li key={post.id}>{ post.title }</li>
              )
            }
          </ul>
        ) : (
            <p>Fetching Data...</p>
        )
      }
    </div>
  )
}

export default App;