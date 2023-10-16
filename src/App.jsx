import React, { Component } from 'react';

class Hello extends Component {
  render() {
    return (
      <p>Hello World!</p>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Hello />
      </div>
    )
  }
}

export default App;