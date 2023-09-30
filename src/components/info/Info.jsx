//import React from 'react'
import { RxCalendar } from 'react-icons/rx'
import {BsShieldCheck} from 'react-icons/bs'
import {BsBookmarkCheck} from 'react-icons/bs'
import './info.css'

const info = () => {
  return (
    <div className='info section'>
    <div className='infoContainer container'>
      <div className="titleDiv flex">
<h2>Travel to make memories all around the world</h2>
<button className='btn'>View All</button>
      </div>

      <div className="cardsDiv">
       <div className="singleCard grid">
       <div className="iconDiv flex">
        <RxCalendar className='icon'/>
       </div> 
       <span className="cardTitle">Book & Relax</span> 
       <p>You can also call airlines from your phone and book a flight</p>
       </div>

       <div className="singleCard grid">
       <div className="iconDiv flex colorTwo">
        <BsShieldCheck className='icon'/>
       </div> 
       <span className="cardTitle">Get upto 10% cashback</span> 
       <p>Book your flight from here</p>
       </div>

       <div className="singleCard grid">
       <div className="iconDiv flex colorThree">
        <BsBookmarkCheck className='icon'/>
       </div> 
       <span className="cardTitle">Up to 6% 6E Rewards</span> 
       <p>Books your flights and get the offers</p>
       </div>


      </div>
    </div>
    
    </div>
  )
}

export default info
