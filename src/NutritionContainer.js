import React, { Component } from 'react'
import NutritionDefaultAlert from './NutritionDefaultAlert'
import NutritionList from './NutritionList'

const values = {
  'Egg': { calories: 200, dailyValue: 10 },
  'Bacon': { calories: 400, dailyValue: 20 },
  'Cheese': { calories: 150, dailyValue: 7.5 },
  'Potato': { calories: 250, dailyValue: 12.5 },
  'Green Chili': { calories: 75, dailyValue: 3.75 },
  'Jalapeno': { calories: 55, dailyValue: 2.325 }
}

class NutritionContainer extends Component
{
  render() {
    let nutrition = this.props.ingredients.map(ingredient => {
        let calories = values[ingredient.ingredient].calories * ingredient.count
        let dailyValue = values[ingredient.ingredient].dailyValue * ingredient.count
        return { calories, dailyValue }
      })
    return nutrition.length === 0 ?
      <NutritionDefaultAlert /> :
      <NutritionList nutrition={nutrition} />
  }
}
export default NutritionContainer
