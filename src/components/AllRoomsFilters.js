import React from 'react'
import { useAppContext } from '../context/appContext'
import FormRow from './FormRow'
import FormRowSelect from './FormRowSelect'

import Checkbox from '@mui/material/Checkbox';

import FormControlLabel from '@mui/material/FormControlLabel'






const AllRoomsFilters = () => {
    let {RoomsTypes,RoomsCapacity,roomType,
        roomCapacity,
        roomPrice,
        roomSize,
        breakfast,
        pets,
        handleChange,
        handleCheck,
}=useAppContext()


function handleChangeFun(e){
    handleChange(e.target.name,e.target.value)
}


function handleCheckFun(e){
    handleCheck(e.target.name,e.target.checked)
}

  return (
      <div>
      <h3 className='text-center'>Search Rooms</h3>
      {/* // { type, name, value, handleChange, labelText } */}

      <div className='div-center-80 grid-10' style={{marginTop:"30px",marginBottom:"30px"}}>
          <FormRowSelect labelText="Room Type" name="roomType" value={roomType} handleChange={handleChangeFun} list={RoomsTypes}/>

          <FormRowSelect labelText="Room Capacity" name="roomCapacity" value={roomCapacity} handleChange={handleChangeFun} list={RoomsCapacity}/>

          <FormRow type="text" labelText="Room Size(SQRT)" value={roomSize} name="roomSize" handleChange={handleChangeFun}/>

          <FormRow type="text" labelText="Room Price" value={roomPrice} name="roomPrice" handleChange={handleChangeFun}/>

          <div style={{display:"flex",flexDirection:"column"}}>
            <FormControlLabel control={<Checkbox />} label="BreakFast" checked={breakfast} name='breakfast' className='light'  onChange={handleCheckFun} />
            <FormControlLabel control={<Checkbox/>} label="Pets" checked={pets} name='pets' className='light'  onChange={handleCheckFun} />
          </div>

      </div>


    </div>
  )
}

export default AllRoomsFilters
