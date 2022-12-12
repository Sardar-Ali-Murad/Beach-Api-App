import { Room } from '@mui/icons-material'
import React from 'react'
import { useAppContext } from '../context/appContext'
import "./SingleRoom.css"
import Banner from './Banner'
// using the css of the single room

const AllRoomsHeader = () => {
    let {Rooms}=useAppContext()
  //  let [randomNo,setRandomNo]=React.useState(Math.floor(Math.random()*Rooms.length))
  // let room=Rooms[randomNo]
  return (
    <div>
        <div className="single-room-main">
        <div className="single-room-image">
          <img src={Rooms[0]?.fields?.images[0]?.fields?.file?.url} />
        </div>

        <div className="single-room-banner">
          <Banner
            mainHeading="Our Rooms"
            btnText="Back To Rooms"
            path="/"
          />
        </div>
      </div>
    </div>
  )
}

export default AllRoomsHeader
