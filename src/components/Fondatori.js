import { FaPhone } from 'react-icons/fa'

import React from 'react'
import Fondator from './Fondator'
import Fondator1 from '../assets/barbat1.png' 
import Fondator2  from '../assets/barbat2.png' 
const Fondatori = () => {
  return (
    <div className='pt-24'>
            
        <h2 className='text-center text-6xl mb-8'>Fondatori</h2>
        <div className='flex w-full justify-center gap-4'>
        <Fondator imagine={Fondator1.src} nume="Vlad Vladimir" ocupatie="Fondator & frizer"/>
    <Fondator imagine={Fondator2.src} nume="Daniel Sebastian" ocupatie="Fondator & frizer"/>
        </div>

    </div>
  )
}

export default Fondatori
