import React, { component } from 'react'
import Ingredient from './Ingredient'

const IngredientsList = ({ ingredients }) => 
ingredients.length === 0 ?
(
  <div className="alert alert-info">
    <strong>Your burrito needs ingredients!</strong><br />
    Please add ingredients to create your burrito
  </div>
) :
(
  <ul className="list-group">
    {
      ingredients.map((ingredient, index) => 
        (<Ingredient key={index} ingredient={ingredient} />)
      )
    }
  </ul>
)
export default IngredientsList
