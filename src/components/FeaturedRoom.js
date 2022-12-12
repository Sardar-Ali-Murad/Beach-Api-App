import React from 'react'
import { useAppContext } from '../context/appContext'
import "./FeaturedRoom.css"
import RoomCard from "./FeaturedRoom"
import { Link } from 'react-router-dom'

const FeaturedRoom = () => {
    let {Rooms,FeaturedRooms}=useAppContext()
    console.log(FeaturedRooms)
   

  return (
    <div>
      <h2 className='text-center'>Featured Room</h2>

      <div className='div-center-80 grid-20 featured-main'>
      {
          FeaturedRooms?.map((props)=>{
              return  <div className='room-card-main' id={props.sys.id}>

              <div className='room-image'>
                <img src={props?.fields?.images[0]?.fields?.file?.url}/>
              </div>
        
              <div className='image-info'>
                <div className='image-info-wrapper'>
                  <h3>{props?.fields?.name}</h3>
                   <p>${props?.fields?.price}</p>
                </div>
              </div>

              <div className='room-overlay'>
                <Link to={`/room/${props.sys.id}`}>
                    <button className='dark details-btn'>See Info</button>
                </Link>
              </div>
        
            </div>
            })
        }
        </div>


    </div>
  )
}

export default FeaturedRoom
