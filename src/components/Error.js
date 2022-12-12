import React from 'react'
import Image from "./img/3.jpg"
import "./Hero.css"
import Banner from './Banner'
const Error = () => {
  return (
    <div className='hero-main'>
      <Banner mainHeading="404" subHeading="Page Not Found" btnText="Return Home" path="/"/>
    </div>
  )
}

export default Error

