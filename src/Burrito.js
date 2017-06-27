import React, { Component } from 'react'
import BurritoForm from './BurritoForm'
import IngredientsList from './IngredientsList'
import NutritionList from './NutritionList'

class Burrito extends Component {
  constructor(props) {
    super(props)

    this.state = { ingredients: [] }
    this.addIngredientHandler = this._addIngredient.bind(this)
    this.removeIngredientHandler = this._removeIngredient.bind(this)
  }
  _addIngredient(ingredient) {
    this.setState({ ingredients: this.state.ingredients.concat([ingredient]) })
  }
  _removeIngredient(index) {
    this.setState({ ingredients: this.state.ingredients.splice(index, 1) })
  }

  render() {
    return (
      <div className="burrito">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <BurritoForm addIngredient={this.addIngredientHandler} />
            </div>
            <div className="col-md-3">
              <IngredientsList ingredients={this.state.ingredients} />
            </div>
            <div className="col-md-3">
              <NutritionList ingredients={this.state.ingredients} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Burrito
