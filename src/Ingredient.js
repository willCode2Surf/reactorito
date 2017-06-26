import React from 'react';

const Ingredient = ({ ingredient }) => (<li className="list-group-item"><span className="badge">{ingredient.count}</span> {ingredient.ingredient}</li>)

export default Ingredient
