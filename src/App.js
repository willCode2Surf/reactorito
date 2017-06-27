import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import Burrito from './Burrito'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React[orito]</h2>
        </div>
        <Burrito />
      </div>
    )
  }
}

export default App;
