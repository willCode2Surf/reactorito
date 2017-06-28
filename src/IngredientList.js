import React from 'react'
import Ingredient from './Ingredient'
import IngredientTotal from './IngredientTotal'

const IngredientList = ({ ingredients }) => 
  <ul className="list-group">
    <li className="list-group-item"><strong>Ingredients</strong></li>
    {
      ingredients.map((ingredient, index) => 
        (<Ingredient key={index} ingredient={ingredient} />)
      )
    }
    <IngredientTotal ingredients={ingredients} />
  </ul>

export default IngredientList
