
import { act } from 'react-dom/test-utils'
import {
   HANDLE_CHANGE,
   HANDLE_CHECK,
   FILTER_ROOMS,
   GET_ROOMS
} from './actions'

const reducer = (state, action) => {
   if(action.type===HANDLE_CHANGE){
    return {
      ...state,
      [action.payload.name]:action.payload.value
    }
   }

   if(action.type===HANDLE_CHECK){
    return {
      ...state,
      [action.payload.name]:action.payload.value
    }
   }

   if(action.type===FILTER_ROOMS){
    return{
      ...state,
      Rooms:action.payload.data
    }
   }

   
   if(action.type===GET_ROOMS){
    return{
      ...state,
      Rooms:action.payload.data
    }
   }


  throw new Error(`no such action : ${action.type}`)
}

export default reducer
