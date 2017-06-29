import React, { Component } from 'react'
import BurritoForm from './BurritoForm'
import IngredientsContainer from './IngredientsContainer'
import NutritionContainer from './NutritionContainer'
import { find } from 'ramda'

class Burrito extends Component {
  constructor(props) {
    super(props)

    this.state = { ingredients: [] }
    // TODO - Move current burrito state to app
    
    this.addIngredientHandler = this._addIngredient.bind(this)
    this.removeIngredientHandler = this._removeIngredient.bind(this)
  }
  _addIngredient(newIngredient) {
    let ingredients = this.state.ingredients.filter(item => item.ingredient !== newIngredient.ingredient)
    let existingItem = find(ing => ing.ingredient === newIngredient.ingredient, this.state.ingredients)
    let defaultItem = existingItem ?
      Object.assign({}, existingItem, { count: existingItem.count + newIngredient.count }) :
      newIngredient
    this.setState({ ingredients: ingredients.concat(defaultItem) })
  }
  _removeIngredient(index) {
    this.setState({ ingredients: this.state.ingredients.splice(index, 1) })
  }
  _addBurrito(event) {
    this.props.addBurritoHandler(this.state.ingredients)
    this.setState({ ingredients: [] })
  }
  render() {
    let addBurritoEnabled = !this.state.ingredients.length
    return (
      <div className="burrito">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <BurritoForm addIngredient={this.addIngredientHandler} clickCount={this.props.clickCount} />
            </div>
            <div className="col-md-3">
              <IngredientsContainer ingredients={this.state.ingredients} />
            </div>
            <div className="col-md-3">
              <NutritionContainer ingredients={this.state.ingredients} />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {
                <button className="btn btn-success btn-block" disabled={addBurritoEnabled} onClick={this._addBurrito.bind(this)}>Add Burrito</button>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Burrito
