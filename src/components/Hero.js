import React from 'react'
import Image from "./img/3.jpg"
import "./Hero.css"
import Banner from './Banner'
const Hero = () => {
  return (
    <div className='hero-main'>
      <Banner mainHeading="Luxurious Rooms" subHeading="Delux Rooms Starting At $123" btnText="OUR ROOMS" path="/rooms"/>
    </div>
  )
}

export default Hero
