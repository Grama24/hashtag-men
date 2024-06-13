import React from 'react'


const ItemCatalog = (props) => {
  return (
    <div>
     
    <div className='itemCatalog flex flex-row justify-between border-y border-white text-3xl content-center'>
      <div className='flex my-8'>
      <div className='mr-4 my-auto w-12 h-12 rounded-full bg-black content-center'>{props.icon}</div> 
      <p className='my-auto'>{props.serviciu}</p>
      </div>
   

      <p className='text-white shadow-md uppercase my-8 mt-[2.5rem]'>{props.pret}</p>
    </div>

    </div>
  )
}

export default ItemCatalog
