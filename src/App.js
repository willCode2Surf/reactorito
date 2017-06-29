import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import Burrito from './Burrito'
import BurritoList from './BurritoList'
import { find } from 'ramda'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { name: '', burritos: [], clickCount: 0, currentBurrito: [] }
    this.addBurritoHandler = this._addBurrito.bind(this)
  }
  _addBurrito() {
    this.setState({ burritos: this.state.burritos.concat([this.state.currentBurrito]), currentBurrito: [] })
    console.log(this.state)
  }
  _addIngredient(newIngredient) {
    let ingredients = this.state.currentBurrito.filter(item => item.ingredient !== newIngredient.ingredient)
    let existingItem = find(ing => ing.ingredient === newIngredient.ingredient, this.state.currentBurrito)
    let defaultItem = existingItem ?
      Object.assign({}, existingItem, { count: existingItem.count + newIngredient.count }) :
      newIngredient
    this.setState({ currentBurrito: ingredients.concat(defaultItem) })
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
        <Burrito addIngredient={this._addIngredient.bind(this)} 
          clickCount={this.state.clickCount} 
          addBurrito={this._addBurrito.bind(this)} 
          ingredients={this.state.currentBurrito} />
        <BurritoList burritos={this.state.burritos} />
      </div>
    )
  }
}

export default App;
