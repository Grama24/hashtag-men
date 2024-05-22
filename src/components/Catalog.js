import React from 'react'
import ItemCatalog from './ItemCatalog'
import { FaScissors } from "react-icons/fa6";
import { GiComb, GiBeard } from "react-icons/gi";
import { PiHairDryerFill } from "react-icons/pi";
import { ImStarFull } from "react-icons/im";

const Catalog = () => {
  return (
    <div className='text-center w-[90%] sm:w-[80%] text-white mx-auto gap-8 flex flex-col items-center justify-center pt-24'>
      <h2 className='text-6xl'>Servicii</h2>
  
      <ul className='w-[90%]'>
        <li><ItemCatalog icon={<FaScissors size={20} className='iconCatalog mx-auto' />} serviciu="Tuns" pret="80-100 ron"/></li>
        <li><ItemCatalog icon={<GiComb size={20} className='iconCatalog mx-auto' />} serviciu="Tuns + aranjat barba" pret="100-120 ron"/></li>
        <li><ItemCatalog icon={<GiBeard size={20} className='iconCatalog mx-auto' />} serviciu="Aranjat barba" pret="40ron"/></li>
        <li><ItemCatalog icon={<PiHairDryerFill size={20} className='iconCatalog mx-auto' />} serviciu="Spalat + styling" pret="40ron"/></li>
        <li><ItemCatalog icon={<ImStarFull size={20} className='iconCatalog mx-auto' />} serviciu="Pachet exclusiv" pret="120-140 ron"/></li>
      </ul>
     
    </div>
  )
}

export default Catalog
