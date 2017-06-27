import React, { Component } from 'react'
import BurritoForm from './BurritoForm'
import IngredientsList from './IngredientsList'

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
        <div className="col-md-3 col-centered">
          <IngredientsList ingredients={this.state.ingredients} removeIngredient={this.removeIngredientHandler} />
          <BurritoForm addIngredient={this.addIngredientHandler} />
        </div>
      </div>
    )
  }
}

export default Burrito
