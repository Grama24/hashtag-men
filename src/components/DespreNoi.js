import React from 'react'
import Poza from "../assets/poza.jpg"
import ItemDespre from './ItemDespre'
import Concrete from "../assets/concrete.jpg"
import { FaMedal, FaLaughSquint } from "react-icons/fa";
import { FaScissors } from "react-icons/fa6";
const DespreNoi = () => {
  return (
    <div id="despre" className='relative pt-16'>
      <div className=''>
      <h2 className='text-6xl text-center mb-16'>Despre Noi</h2>
      <img src={Concrete.src} className='imagine-landing bg-cover object-cover h-full w-full absolute top-0 left-0 z-[-1] opacity-40 scale-y-[-1]'/> 
      </div>
      <div className='flex flex-col w-[90%] max-w-[1250px] mx-auto bg-black shadow-2xl shadow-gray-300 bg-opacity-50 p-8 rounded-3xl'>
      <div className='flex flex-row lg:flex-col items-center gap-32 lg:gap-8 lg:text-center'>
      <img src={Poza.src} className='h-[500px] rounded-3xl shadow-xl '/>
    <p className='text-4xl'>Bine ați venit la Hashtag Men, un loc unde tradiția întâlnește modernitatea! Salonul a fost deschis în acest an cu scopul de a aduce un suflu nou în lumea tunsorilor.</p>
      </div>
   
      </div>
     
     <div className='flex pt-32 justify-between w-[90%] max-w-[1250px] mx-auto gap-8 text-center nav:flex-col'>
     <ItemDespre icon={<FaMedal size={70}/>} titlu="Profesionalism" scris="Fiecare vizită la noi este mai mult decât o simplă tunsoare. Este o experiență completă de relaxare și răsfăț, unde ne asigurăm că fiecare detaliu este perfect."/>
     <div className=''>
 <ItemDespre icon={<FaScissors size={70}/>} titlu="Calitate de top" scris="Folosim doar produse de înaltă calitate și echipamente moderne pentru a ne asigura că fiecare client pleacă mulțumit și încrezător."/>
    
     </div>
     <div className=''>
     <ItemDespre icon={<FaLaughSquint size={70} />} titlu="Atmosferă prietenoasă" scris="Salonul nostru este un loc unde vă puteți relaxa, socializa și vă puteți bucura de o băutură răcoritoare în timp ce așteptați. Credem în crearea unei comunități și în oferirea unui mediu confortabil și primitor."/> 
     </div>
         
     </div>

     <div className='flex flex-col mt-32 p-8 w-[90%] max-w-[1250px] mx-auto gap-8 text-center shadow-2xl  shadow-gray-300 bg-black bg-opacity-50 rounded-3xl'>
      <h2 className='text-5xl text-white opacity-100'>Vă așteptăm cu drag!</h2>
      <p className='text-2xl'>Veniți să descoperiți diferența pe care o face pasiunea pentru frizerie. La noi, fiecare client este tratat ca un prieten vechi, iar scopul nostru este să vă oferim cele mai bune servicii într-o atmosferă relaxată și primitoare.</p>
     </div>

    </div>
  )
}

export default DespreNoi
