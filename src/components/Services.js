import React from 'react'
import { services } from './data'
import "./Services.css"

const Services = () => {
  return (
    <div className='service-big-main'>

    <div className='div-center-70 flex-even service-main' >
      {
          services.map((service)=>{
              return <div className='single-service' >
                <div>{service?.icons}</div>
                <h1>{service?.heading}</h1>
                <p>{service?.info}</p>
            </div>
     })
    }
    </div>
    </div>
  )
}

export default Services
