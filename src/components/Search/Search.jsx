//import React from 'react'
import './Search.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {RiAccountPinCircleLine} from 'react-icons/ri'
import {RxCalendar} from 'react-icons/rx'


const Search = () => {
  return (
    <div>
    <div className='search container section'>
      <div className='sectionContainer grid'>
        <div className='btns flex'>
       <div className="singleBtn">
        <span>Economy</span>
       </div>

       <div className="singleBtn">
        <span>Business Class</span>
       </div>

       <div className="singleBtn">
        <span>First Class</span>
       </div>

        </div>

    <div className="searchInputs flex">

     {/*  single Input */}

     <div className="singleInput flex">
            <div className="iconDiv">
              <HiOutlineLocationMarker  className='icon'/>
            </div>

            <div className="texts">
              <h4>Location</h4>
              <input type="text" placeholder='Where do you want to go?' />
            </div>
     </div>

       {/*  single Input */}

       <div className="singleInput flex">
            <div className="iconDiv">
              <RiAccountPinCircleLine  className='icon'/>
            </div>

            <div className="texts">
              <h4>Travelers</h4>
              <input type="text" placeholder='Add guests' />
            </div>
     </div>

       {/*  single Input */}

       <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar  className='icon'/>
            </div>

            <div className="texts">
              <h4>Check In</h4>
              <input type="text" placeholder='Add ' />
            </div>
     </div>


      {/*  single Input */}

      <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar  className='icon'/>
            </div>

            <div className="texts">
              <h4>Check Out</h4>
              <input type="text" placeholder='Add ' />
            </div>
     </div>

     <button className='btn btnBlock flex'>Search Flight</button>
    </div>

      </div>
    </div>
    </div>
  )
}

export default Search
