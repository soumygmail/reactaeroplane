//import React from 'react'

import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Lounge from "./components/Lounge/Lounge"
import Navbar from "./components/Navbar/Navbar"
import Search from "./components/Search/Search"
import Subscribers from "./components/Subscribers/Subscribers"
import Support from "./components/Support/Support"

import Info from './components/info/Info'
//import Nav from './Nav'

const App = () => {
  return (
    <div>
     <Navbar />
      <Home /> 

      <Search />
     <Support />
    <Info />
     <Lounge />
   
     
     <Subscribers />
     <Footer />  
    </div>
  )
}

export default App

