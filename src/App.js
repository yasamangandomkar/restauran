import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import AboutUs from './components/AboutUs/AboutUs'
import SpecialMenu from './components/Menu/SpecialMenu'
import Chef from './components/Chef/Chef'
// import Intro from './components/Intro/Intro'
import Laurels from './components/Laurels/Laurels'
import './App.css'
import Gallery from './components/Gallery/Gallery'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <AboutUs/>
      <SpecialMenu/>
      <Chef/>
      {/* <Intro/> */}
      <Laurels/>
      <Gallery/>
    </div>
  )
}

export default App