import React from 'react'
import './TimeFilter.css'
export default function TimeFilter() {
  return (
    <div>
                  <div className='TimeBox' dir='rtl'>
                          <h4>براساس زمان</h4>
                          <hr />
                          <div className="filter">
                                  <div>
                                          <input type="radio" name="" id="fifty" />
                                          <p id='fifty'>بین 8:00تا10 </p>
                                  </div>
                                  <div>
                                          <input type="radio" name="" id="fifty" />
                                          <p id='fifty'>بین 10تا12 </p>
                                  </div>
                                  <div>
                                          <input type="radio" name="" id="fifty" />
                                          <p id='fifty'>بین 12تا14 </p>
                                  </div>
                          </div>
                  </div>
    </div>
  )
}
