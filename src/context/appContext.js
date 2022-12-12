import React, { useReducer, useContext } from 'react'

import reducer from './reducer'
import rooms from "../utils/data"



import {
  HANDLE_CHANGE,
  HANDLE_CHECK,
  FILTER_ROOMS,
  GET_ROOMS
} from './actions'
import { ReduceCapacityRounded } from '@mui/icons-material'


const initialState = {
     Rooms:[],
     FeaturedRooms:rooms.filter((room)=>room.fields.featured===true),
     RoomsTypes:[...new Set(rooms.map((room)=>room?.fields?.type))],
     RoomsCapacity:[...new Set(rooms.map((room)=>room?.fields?.capacity))],
     roomType:"",
     roomCapacity:"",
     roomPrice:"",
     roomSize:"",
     breakfast:false,
     pets:false
}


const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  React.useEffect(()=>{
     dispatch({type:GET_ROOMS,payload:{data:rooms}})
  },[])
  
    function handleChange(name,value){
      dispatch({type:HANDLE_CHANGE,payload:{name:name,value:value}})
    }

    function handleCheck(name,value){
      dispatch({type:HANDLE_CHECK,payload:{name:name,value:value}})
    }

    // React.useEffect(()=>{
      function start(){
          let FilteredRooms=rooms
          if(state.roomCapacity){
          FilteredRooms=FilteredRooms.filter((all)=>all?.fields?.capacity==state.roomCapacity)
          }
          if(state.roomPrice){
         FilteredRooms=FilteredRooms.filter((all)=>all?.fields?.price<Number(state.roomPrice))
          }
          if(state.roomSize){
         FilteredRooms=FilteredRooms.filter((all)=>all?.fields?.size<Number(state.roomSize))
          }
        if(state.roomType){
        FilteredRooms=FilteredRooms.filter((all)=>all?.fields?.type===state.roomType)
        }
          if(state.breakfast){
          FilteredRooms=FilteredRooms.filter((all)=>all?.fields?.breakfast===true)
        }
        
        if(state.pets===true){
          FilteredRooms=FilteredRooms.filter((all)=>all?.fields?.pets===true)
        }
          console.log(FilteredRooms)
       dispatch({type:FILTER_ROOMS,payload:{data:FilteredRooms}})
      }
      // start()
  //  },[state.roomCapacity,state.roomPrice,state.roomSize,state.breakfast,state.pets,state.roomType])
 
  
  return (
    <AppContext.Provider
    value={{
      ...state,
      handleChange,
      handleCheck,
      start
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }
