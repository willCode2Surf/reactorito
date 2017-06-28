import React from 'react'
import Ingredient from './Ingredient'

const IngredientTotal = ({ ingredients }) =>
ingredients
  .reduce((memo, item) => { 
    memo[0].count += item.count;
    return memo
  },
  [{ ingredient: 'Total', count: 0 }])
  .map((item, index) => (<Ingredient key={index} ingredient={item} />))[0]

export default IngredientTotal
