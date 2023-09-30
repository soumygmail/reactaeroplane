//import React from 'react'
import New from '../../assets/new.jpeg'
import travel from '../../assets/travel.webp'
import './travelers.css'


// const travelers = [
//   {
//     id:1,
//     destinationImage: paris,
//     travelerImage: traveler1,
//     travelerName:'IsraTech',
//     socialLink:'@isratech8'

//   }
// ]
const Travelers = () => {
  return (
   
      <div className='travelers container section'>

      <h2>Top travelers of this month!</h2>

      <div className="travelersContainer grid">
     
     
      <div  className="singleTraveler">
        <img src={New} className="destinationlmage"  />
        <div className="travelerDetails">
        <div className="singleTraveler">
        <img src={travel} className="travelImage" />
        </div>
        </div>
           <div className="travelName">

           <span>IsraTech</span>
           @isratech8
          </div>
        </div>

        <div  className="singleTraveler">
        <img src={New} className="destinationlmage"  />
        <div className="travelerDetails">
        <div className="singleTraveler">
        <img src={travel} className="travelImage" />
        </div>
        </div>
           <div className="travelName">

           <span>IsraTech</span>
           @isratech8
          </div>
        </div>

        <div  className="singleTraveler">
        <img src={New} className="destinationlmage"  />
        <div className="travelerDetails">
        <div className="singleTraveler">
        <img src={travel} className="travelImage" />
        </div>
        </div>
           <div className="travelName">

           <span>IsraTech</span>
           @isratech8
          </div>
        </div>

    
   




  </div>

  </div>
  )

  }

export default Travelers
