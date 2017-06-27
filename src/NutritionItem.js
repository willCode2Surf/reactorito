import React from 'react';

const NutritionItem = ({ nutrition }) => (<li className="list-group-item">{nutrition.calories} kcal <span className="badge">{nutrition.dailyValue}% dv</span></li>)

export default NutritionItem
