import React, { Component } from 'react'
class BurritoForm extends Component
{ 
  _submit(event) {
    event.preventDefault()
    let ingredient = this.refs.ingredient.value
    let count = this.refs.count.value
    this.props.addIngredient({ ingredient, count })
    this.refs.ingredient.value = ''
    this.refs.count.value = 1
  }
  render() {
    return <form onSubmit={this._submit.bind(this)} className="form-inline">
      <div className="form-group">
        <label htmlFor="ingredient">Ingredient</label>
        <input type="text" ref="ingredient" id="ingredient" className="form-control"/>
      </div>
      <div className="form-group">
        <label htmlFor="count">Count</label>
        <input type="number" ref="count" id="count" min="1" className="form-control"/>
      </div>
      <button type="submit" className="btn btn-primary">Add Ingredient</button>
    </form>
  }
}
export default BurritoForm