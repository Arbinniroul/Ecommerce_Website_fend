import React from "react"
import HeroSection from "../modules/HeroSection"
import Navbar from "../modules/Navbar"
import FlashSales from "../modules/FlashSales"


const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <FlashSales/>

    </div>
  )
}

export default Home