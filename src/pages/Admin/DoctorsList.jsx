import React, { useContext, useEffect } from 'react'
import {AdminContext} from '../../context/AdminContext'

const DoctorsList = () => {

  const{doctors, aToken, getAllDoctors, changeAvailability} =useContext(AdminContext)

  useEffect(()=>{
    if (aToken) {
      getAllDoctors()
    }

  },[aToken])

  return (
    <div className='m-5 max-h-[90vh] overflow-y-scroll '>
      <h1 className='text-xl font-bold'>All <span className='text-primary ml-1'> Doctors</span></h1>
      <div className='w-full flex flex-wrap gap-4 pt-5 gap-y-6'>
        {
          doctors.map((item, index)=>(
            <div key={index} className='border border-indigo-200 rounded-xl max-w-56 overflow-hidden cursor-pointer group'>
                <img className='h-56 w-52 bg-indigo-50 group-hover:bg-primary transition-all duration-500' src={item.image} alt="" />
                <div className='p-4'>
                  <p className='text-neutral-800 text-lg font-medium'>{item.name}</p>
                  <p className='text-zinc-600 text-sm'>{item.speciality}</p>
                  <div className='mt-2 flex items-center gap-1 text-sm'>
                    <input onChange={()=> changeAvailability(item._id)} type="checkbox" checked={item.available} />
                    <p >Available</p>
                  </div>
                </div>
            </div>
          ))

        }
        
      </div>
    </div>
  )
}

export default DoctorsList