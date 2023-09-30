//import React from 'react'
import './Home.css'
import video from '../../assets/video.mp4'
//import Image from '../../assets/img.jpg'

const Home = () => {
  return (
    <div className='home flex container'>
    <div className='mainText'>
<h1>Create Ever-lasting Memories with us</h1>
    </div>

    <div className="homeImages flex">
 
 <div className="videoDiv">
   <video src={video} autoPlay muted loop className='video'></video>
 </div>


  {/* <img src={Image} className='plane'/> */}
    </div>
   
    </div> 
  )
}

export default Home
