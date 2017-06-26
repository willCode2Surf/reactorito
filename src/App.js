import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BurritoForm from './BurritoForm'
import IngredientsList from './IngredientsList'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { ingredients: [] }
    this.addIngredientHandler = this._addIngredient.bind(this)
    this.removeIngredientHandler = this._removeIngredient.bind(this)
  }
  _addIngredient (ingredient) {
    this.setState({ ingredients: this.state.ingredients.concat([ ingredient ]) })
  }
  _removeIngredient (index) {
    this.setState({ ingredients: this.state.ingredients.splice(index, 1)})
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React[orito]</h2>
        </div>
        <IngredientsList ingredients={this.state.ingredients} removeIngredient={this.removeIngredientHandler}/>
        <BurritoForm addIngredient={this.addIngredientHandler} />
      </div>
    );
  }
}

export default App;
