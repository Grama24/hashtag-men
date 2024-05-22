import React from 'react'
import Link from 'next/link'
import { Teko } from "next/font/google";

const Header = () => {
  return (
    
    <div className='header absolute top-0 w-full flex justify-around p-8 content-center text-yellow-600 font-semibold 
     uppercase'>
  
      <h2 className='text-4xl'>#MEN</h2>
      <nav className='flex flex-row gap-8 text-2xl'>
        <Link href='/'>Despre noi</Link>
        <Link href='/'>Preturi</Link>
        <Link href='/'>Contact</Link>

      </nav>

    </div>
  )
}

export default Header
