import React from 'react'

const BurritoCondensed = ({ingredients, burritoIndex}) =>
<div className="alert alert-success">
  <h2>Burrito #{burritoIndex + 1}</h2>
  {ingredients.map((ingredient, index) => <p key={index}>{ingredient.count} <strong>{ingredient.ingredient}</strong></p>)}
</div>

export default BurritoCondensed
