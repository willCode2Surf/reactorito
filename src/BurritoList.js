import React from 'react'
import BurritoCondensed from './BurritoCondensed'

const BurritoList = ({burritos}) => 
<div className="row">
  {
    burritos.map((burrito, index) => 
    <div className="col-md-3" key={index}>
      <BurritoCondensed burritoIndex={index} ingredients={burrito} />
    </div>)
  }
</div>

export default BurritoList
