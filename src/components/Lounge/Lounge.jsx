//import React from 'react'
import  back from "../../assets/back.jpeg"
import backk from "../../assets/backk.webp"
import './lounge.css'
const Lounge = () => {
  return (
    <div className='lounge container section'>
     <div className="sectionContainer grid">

     <div className="imgDiv">

      <img src={ back } alt="" />
      <img src={ backk } alt="" className="logo"/>


     </div>

     <div className="textDiv">
     <h2>Unaccompained Minor Lounge</h2>
     </div>

     <div className="grids grid">
     <div className="singleDiv">
     <span className='gridTitle'>
     Help through the airport
     </span>
     <p>
     You can also call airlines from your phone and book a flight ticket
     to one of your favorite destinations
     </p>
     </div>
     <div className="singleDiv">
     <span className='gridTitle'>
     Help through the airport
     </span>
     <p>
     You can also call airlines from your phone and book a flight ticket
     to one of your favorite destinations
     </p>
     </div>
     <div className="singleDiv">
     <span className='gridTitle'>
     Priority Boarding
     </span>
     <p>
     You can also call airlines from your phone and book a flight ticket
     to one of your favorite destinations
     </p>
     </div>
     <div className="singleDiv">
     <span className='gridTitle'>
    Care on the flight
     </span>
     <p>
     You can also call airlines from your phone and book a flight ticket
     to one of your favorite destinations
     </p>
     </div>
     </div>



     </div>
    </div>
  )
}

export default Lounge
