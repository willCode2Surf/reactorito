import React from 'react'
import NutritionItem from './NutritionItem'
import NutritionTotal from './NutritionTotal' 

const NutritionList = ({ nutrition }) => 
  <ul className="list-group">
    <li className="list-group-item"><strong>Nutrition</strong></li>
    {
      nutrition.map((nutritionItem, index) =>
        (<NutritionItem key={index} nutrition={nutritionItem} />)
      )
    }
    <NutritionTotal nutrition={nutrition} />
  </ul>

export default NutritionList
