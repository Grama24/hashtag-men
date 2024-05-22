import React from 'react'
import banner from '../assets/banner.jpg';
import { FaPhone, FaMapPin} from 'react-icons/fa';
import Link from 'next/link';
const Hero = () => {
  return (
    <div className='h-[100vh] overflow-hidden content-center mx-auto'>
       <img src={banner.src} className='imagine-landing bg-cover object-cover h-[100vh] w-full absolute top-0 left-0 -z-10 blur-md shadow-lg opacity-40 '/> 
       <div className='text-center w-[80%] sm:w-[80%]  text-white mx-auto gap-8 flex flex-col items-center justify-center'>
       <h2 className='  sm:text-6xl text-5xl uppercase' >Femeia se mai înșeală, frizerul niciodată! </h2> 
       <p className='sm:text-3xl text-2xl'>Vino să descoperi ce înseamnă o experiență de tuns adevărată!</p>
        
        <Link href="https://mero.ro/p/hashtagmenstudio?absp=search_autocomplete"><button className=' bg-yellow-600 w-60 h-12 rounded-3xl text-xl block mx-auto uppercase duration-300 hover:bg-yellow-50 hover:text-yellow-600 hover:duration-500'>Programează-te</button></Link>
    

        <div className='absolute flex left-[15%] bottom-16'>
        <div className='h-12 w-12 bg-yellow-600 content-center rounded-full mr-4'>
        <FaPhone size={20} className='mx-auto' />
        </div>
         
    <p className='text-4xl my-auto opacity-75 cursor-pointer duration-300 hover:opacity-100 hover:duration-300'>0745621512</p>
    
    </div>
    <div className='absolute flex right-[15%] bottom-16 '>
        
         
    <p className='text-4xl my-auto'>Bld. Iuliu Maniu 170</p>
    <div className='h-12 w-12 bg-yellow-600 content-center rounded-full ml-4'>
        <FaMapPin size={20} className='mx-auto' />
        </div>
    </div>

    
       </div>
    </div>
  )
}

export default Hero
