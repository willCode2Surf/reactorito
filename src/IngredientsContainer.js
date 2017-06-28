import React from 'react'
import IngredientList from './IngredientList'
import IngredientsDefaultAlert from './IngredientsDefaultAlert'

const IngredientsContainer = ({ ingredients }) => 
ingredients.length === 0 ? <IngredientsDefaultAlert /> : <IngredientList ingredients={ingredients} />

export default IngredientsContainer
