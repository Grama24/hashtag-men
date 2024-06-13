import React from 'react'

const ItemDespre = (props) => {
  return (
    <div className=" flex flex-col items-center  gap-8 w-[395px] nav:w-full">
      <div className='border-white border-[3px] p-4 rounded-xl'>
      {props.icon}
      </div>
      <h2 className='text-5xl'>{props.titlu}</h2>
      <p className='text-2xl'>{props.scris}</p>
    </div>
  )
}

export default ItemDespre
