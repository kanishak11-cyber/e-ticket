import React from 'react'
import './Home.css';

function Home2() {
  return (
    <div>
        <div className='data_text p-2 m-3  mx-20 my-10 '>Monuments</div>
        <div className="statement  mx-20 my-10">Select any to book Tickets</div>
        <div className='justify-evenly mx-20 my-10  flex flex-row flex-1'>
          <div>
          <h1 className='state_name'> <b>Uttar Pradesh</b></h1>
          </div>
        <div className=" state_image w-64 h-40 white-glassmorphism  rounded-xl" id='photo'>
        </div>
        <div className='w-64 h-40 white-glassmorphism bg-gradient-to-r from-blue-900 to-blue-400 rounded-xl'>
          <div>
          <h1 className='state_name'>uttar pradesh</h1>
          </div>
        </div><div className='w-64 h-40 white-glassmorphism bg-gradient-to-r from-blue-900 to-blue-400 rounded-xl'>
          <div>
          <h1 className='state_name'>uttar pradesh</h1>
          </div>
        </div><div className='w-64 h-40 white-glassmorphism bg-gradient-to-r from-blue-900 to-blue-400 rounded-xl'>
          <div>
          <h1 className='state_name'>uttar pradesh</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home2