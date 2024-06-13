import React from 'react'
import banner from '../assets/panorama.jpg';
import { FaPhone, FaMapPin} from 'react-icons/fa';
import Link from 'next/link';
const Hero = () => {
  return (
    <div className='h-[100vh] overflow-hidden content-center mx-auto'>
       <img src={banner.src} className='imagine-landing bg-cover object-cover h-[100vh] w-full absolute top-0 left-0 -z-10 blur-sm shadow-lg opacity-40 '/> 
       <div className='text-center w-[80%] sm:w-[80%]  text-white mx-auto gap-8 flex flex-col items-center justify-center'>
       <h2 className='  sm:text-5xl md:mt-[-30px] text-5xl uppercase' >Nimeni nu te cunoaste mai bine decat frizerul tău!</h2> 
       <p className='sm:text-3xl text-2xl'>Vino să descoperi ce înseamnă o experiență de tuns adevărată!</p>
        
        <Link href="https://mero.ro/p/hashtagmenstudio?absp=search_autocomplete"><button className=' bg-yellow-600 w-60 h-12 rounded-3xl text-xl block mx-auto uppercase duration-300 hover:bg-yellow-50 hover:text-yellow-600 hover:duration-500'>Programează-te</button></Link>

    <Link className='tel hover:text-yellow-600 duration-200' href='tel:+40745621512'>
    <div className='absolute flex left-[15%] md:left-[35%] items-center bottom-16 md:bottom-8 cursor-pointer '>
        <div className='telicon h-12 w-12 bg-yellow-600 content-center rounded-full mr-4 duration-200'>
        <FaPhone size={20} className='mx-auto' />
        </div>
         
    <p className='text-4xl md:hidden'>0745621512</p>
    
    </div>
    </Link>
       
    <Link href="https://maps.app.goo.gl/YMJwsPQizUQ8nu146" className='loc  hover:text-yellow-600 duration-200'>
    <div className='absolute flex right-[15%] md:right-[35%] content-center bottom-16 md:bottom-8 '>
        
         
        <p className='text-4xl my-auto md:hidden'>Bld. Iuliu Maniu 170</p>
        
        <div className='locicon h-12 w-12 bg-yellow-600 content-center rounded-full ml-4'>
            <FaMapPin size={20} className='mx-auto' />
            </div>
        </div>
    </Link>
    </div>
    
  

    
       </div>
  
  )
}

export default Hero
