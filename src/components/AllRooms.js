import React from 'react'
import { useAppContext } from '../context/appContext'
import "./FeaturedRoom.css"
import { Link } from 'react-router-dom'
// using the css of the feature rooms

const RoomsComponent = () => {
  let {Rooms, roomType,
      roomCapacity,
      roomPrice,
      roomSize,
      breakfast,
      pets,
      start
 }=useAppContext()

 React.useEffect(()=>{
    start()
 },[roomCapacity,
  roomPrice,
  roomSize,
  breakfast,
  pets,
,roomType])





  return (
    <div>
      <div className='div-center-80 grid-20 featured-main'>
      {
          Rooms?.map((props)=>{
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

export default RoomsComponent
