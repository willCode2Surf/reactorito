import React from 'react'
import NutritionItem from './NutritionItem'

const NutritionTotal = ({ nutrition }) =>
nutrition
  .reduce((memo, item) => { 
    memo[0].calories += item.calories; 
    memo[0].dailyValue += item.dailyValue;
    return memo
  },
  [{ ingredient: 'Total', calories: 0, dailyValue: 0 }])
  .map((item, index) => (<NutritionItem key={index} nutrition={item} />))[0]

export default NutritionTotal
