import React from 'react'
import './PriceFilter.css'
export default function Filter() {
  return (
    <div className='PriceBox' dir='rtl'>
      <h4>براساس قیمت</h4>
      <hr />
      <div className="filter">
        <div>
          <input type="radio" name="" id="fifty" />
          <p id='fifty'>بین 50تا100 تومان</p>
        </div>
        <div>
          <input type="radio" name="" id="fifty" />
          <p id='fifty'>بین 50تا100 تومان</p>
        </div>
        <div>
          <input type="radio" name="" id="fifty" />
          <p id='fifty'>بین 50تا100 تومان</p>
        </div>
      </div>
    </div>
  )
}
