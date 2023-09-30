//import React from 'react'
import './support.css'

// import Images
import gridImage from '../../assets/Images.jpg'

const Support = () => {
  return (
    <div className='support container section'>
    <div className="sectionContainer">
      <div className="titlesDiv">
        <small>TRAVEL SUPPORT</small>
        <h2>Plan your travel with confidence</h2>
        <p>Find help with booking and travel plans, see what to expect along the journey!</p>


      </div>

  <div className="InfoDiv grid">
    <div className="textDiv grid">

      <div className="singleInfo">
        <span className='number colorOne'>01</span>
        <h4>Travel requirements for Dubai</h4>
        <p>
          Find help with booking and travel plans, see what to expect along 
          the journey to your favourite destinations!
        </p>
      </div>

      <div className="singleInfo">
        <span className='number colorTwo'>02</span>
        <h4>Multi-risk travel insurence</h4>
        <p>
          Find help with booking and travel plans, see what to expect along 
          the journey to your favourite destinations!
        </p>
      </div>

      <div className="singleInfo">
        <span className='number colorThree'>03</span>
        <h4>Chauffeur services at your arrival</h4>
        <p>
          Find help with booking and travel plans, see what to expect along 
          the journey to your favourite destinations!
        </p>
      </div>
    </div>

    <div className="imgDiv">
      <img src={gridImage} alt="" />
    </div>
  </div>


    </div>
      
    </div>
  )
}

export default Support

