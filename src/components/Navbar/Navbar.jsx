//import React from 'react'
import { SiConsul } from 'react-icons/si'
import { BsPhoneVibrate} from 'react-icons/bs'
import { AiOutlineGlobal} from 'react-icons/ai'
import Nav from './Nav'
import Home from '../Home/Home'
// Import Images
//import logo from '../../assets'

const Navbar = () => {
  return (
    <div className='navBar flex'>
     
    <div className='navBarOne flex'>

<div>
<SiConsul />
</div>
<div className='none flex'>
<li className='flex'> <BsPhoneVibrate className='icon' />Support</li>
<li className='flex'> <AiOutlineGlobal className='icon' />Languages</li>
</div>

<div className="atb flex">
<span>Sign In</span>
<span>Sign Out</span>
</div>
    </div>

    <div className="navBarTwo">
        <div className="logoDiv">
            <img src="" alt="" className='Logo' />
      
      </div>
      <Nav />
          </div>
          

    </div>

  



    


  )
}

export default Navbar
