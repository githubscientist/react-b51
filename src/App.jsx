import React, { createContext, useState } from 'react';
import Profile from './components/Profile';

// Create a context object using the createContext function from React
const ProfileContext = createContext();

// Define a state variable called profileName using the useState hook and set its initial alue to an empty string.
function App() {
    const [profileName, setProfileName] = useState('');
  return (
      <div>
          {/* Wrap the Profile component with the context provider component */}
          {/* passing the profileName state and its corresponding setter function as the value prop.*/}
          <ProfileContext.Provider value={{ profileName, setProfileName }}>
              <Profile />
          </ProfileContext.Provider>
    </div>
  )
}

export {App as default, ProfileContext};