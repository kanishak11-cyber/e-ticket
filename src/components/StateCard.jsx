import React from 'react'
import './Styles/Card.css'
import image from '../asset/he.jpg'
function StateCard() {
  return (
    <div>
              <div className="box">

        <div className="front ">

            <img src={image} alt='hello' height='250' width='300' />

        </div>

        <div className="back">

            <h1>stateName</h1>

        </div>

        </div>
    </div>
  )
}

export default StateCard