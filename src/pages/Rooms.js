import React from 'react'
import {AllRoomsHeader,AllRoomsFilters,AllRooms} from "../components/index"

const Rooms = () => {
  return (
    <div>
      <AllRoomsHeader/>
      <AllRoomsFilters/>
      <AllRooms/>
    </div>
  )
}

export default Rooms
