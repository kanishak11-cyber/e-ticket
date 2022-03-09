import React, { Component } from 'react'
import './Card.css';
import he from '../components/he.jpg';

export class StateCard extends Component {
  render() {
   
    return (
      <div>
         <div className="box">

            <div className="front ">

                <img src={he} alt='hello' height='250' width='300' />

            </div>

            <div className="back">

                <h1>stateName</h1>

            </div>

            </div>
      </div>
    )
  }
}

export default StateCard