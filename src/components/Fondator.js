import React from 'react'
import Fondator1 from '../assets/barbat1.png' 
import Fondator2  from '../assets/barbat2.png' 
const Fondator = (props) => {
  return (
    <div className='flex flex-col'>
      <img src={props.imagine} className='h-[500px]'/>
      <div className='bg-white text-black p-4'>
        <h2 className='text-2xl font-semibold'>{props.nume}</h2>
        <p className='text-xl'>{props.ocupatie}</p>
      </div>
    </div>
  )
}

export default Fondator
