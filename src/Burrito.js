import React from 'react'
import BurritoForm from './BurritoForm'
import IngredientsContainer from './IngredientsContainer'
import NutritionContainer from './NutritionContainer'

const Burrito = ({ addIngredient, ingredients, clickCount, addBurrito }) =>
  <div className="burrito">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <BurritoForm addIngredient={addIngredient} clickCount={clickCount} />
        </div>
        <div className="col-md-3">
          <IngredientsContainer ingredients={ingredients} />
        </div>
        <div className="col-md-3">
          <NutritionContainer ingredients={ingredients} />
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {
            <button className="btn btn-success btn-block" disabled={!ingredients.length} onClick={addBurrito}>Add Burrito</button>
          }
        </div>
      </div>
    </div>
  </div>



export default Burrito
