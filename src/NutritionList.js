import React, { Component } from 'react'
import NutritionItem from './NutritionItem'

const values = {
  'Egg': { calories: 200, dailyValue: 10 },
  'Bacon': { calories: 400, dailyValue: 20 },
  'Cheese': { calories: 150, dailyValue: 7.5 },
  'Potato': { calories: 250, dailyValue: 12.5 }
}

class NutritionList extends Component
{
  render() {
    let nutrition = this.props.ingredients.map(ingredient => {
        let calories = values[ingredient.ingredient].calories * ingredient.count
        let dailyValue = values[ingredient.ingredient].dailyValue * ingredient.count
        return { calories, dailyValue }
      })
    return nutrition.length === 0 ?
      (
        <div className="alert alert-info">
          <strong>Your burrito needs ingredients!</strong><br />
          Please add ingredients to estimate nutritional value for your burrito
        </div>
      ) :
      (
        <ul className="list-group">
          {
            nutrition.map((nutritionItem, index) =>
              (<NutritionItem key={index} nutrition={nutritionItem} />)
            )
          }
        </ul>
      )
  }
}
export default NutritionList
