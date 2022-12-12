import React from 'react'
import "./Banner.css"
import {Link} from "react-router-dom"
const Banner = ({mainHeading,subHeading,btnText,path}) => {
  return (
    <div className='banner-main'>
      <h1>{mainHeading}</h1>
      <h3>{subHeading}</h3>
      <div className='banner-line'></div>
      <Link to={path}>
         <button className='light bannerBtn '>{btnText}</button>
      </Link>
    </div>
  )
}

export default Banner
