import React, { Component } from 'react'
class BurritoForm extends Component
{ 
  _submit(event) {
    event.preventDefault()
    let ingredient = this.refs.ingredient.value
    if(ingredient) {
      let count = Number.parseInt(this.refs.count.value, 10)
      this.props.addIngredient({ ingredient, count })
      this.refs.ingredient.value = ''
      this.refs.count.value = 1
      this.refs.ingredient.focus()
    }
  }
  render() {
    return <form onSubmit={this._submit.bind(this)} >
      <div className="form-group">
        <label htmlFor="ingredient">Ingredient</label>
        <select ref="ingredient" id="ingredient" className="form-control">
          <option value="Egg">Egg</option>
          <option value="Bacon">Bacon</option>
          <option value="Cheese">Cheese</option>
          <option value="Potato">Potato</option>
          <option value="Green Chili">Green Chili</option>
          <option value="Jalapeno">Jalapeno</option>
          {this.props.clickCount > 5?<option value="Ethnic Sausage">Ethnic Sausage</option>:(<option value="sausage">Sausage</option>)}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="count">Count</label>
        <input type="number" ref="count" id="count" min="1" defaultValue="1" className="form-control"/>
      </div>
      <button type="submit" className="btn btn-primary">Add Ingredient</button>
    </form>
  }
}
export default BurritoForm