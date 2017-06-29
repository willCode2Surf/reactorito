import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import Burrito from './Burrito'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { name: '', burritos: [], clickCount: 0 }
    this.addBurritoHandler = this._addBurrito.bind(this)
  }
  _addBurrito(burrito) {
    this.setState({ burritos: this.state.burritos.concat([burrito]) })
  }
  _clickorito(event) {
    this.setState({ clickCount: this.state.clickCount + 1 })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React<span onClick={this._clickorito.bind(this)}>[orito]</span></h2>
        </div>
        <Burrito clickCount={this.state.clickCount} />
      </div>
    )
  }
}

export default App;
