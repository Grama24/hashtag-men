import React from 'react'
import Style from '../styles/navbar.css'
import Link from 'next/link';
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from '../assets/logomen.png'

const Header2 = () => {
  return (
    <div>

         <header className="header p-8 px-16" id="header">
            <Link className='logo' href="/"><img src={Logo.src} className='opacity-80 duration-300 hover:opacity-100 hover:duration-300 hover:shadow-xl shadow-white ' /></Link>
        
            <input type="checkbox" id="check"/>
            <label htmlFor="check" className="icons">
        
                <FaBars size={30} className='bx bx-menu' id="menu-icon"/>
                <FaTimes size={30} className='bx bx-x' id="close-icon"/>
        
            </label>
        
            <nav className="navbar">
            
                <Link className='logo logo2' href="/" style={{ "--i": 0 }}><img src={Logo.src} className=''/></Link>
                <Link id="desprenoi-navbar" href="/desprenoi" style={{ "--i": 1 }}>Despre Noi</Link>
                <Link id="domenii-navbar" href="/servicii" style={{ "--i": 2 }}>Preturi</Link>
                <Link id="contact-navbar" href="/contact" style={{ "--i": 3 }}>Contact</Link>
                
            
            </nav>
            

        </header>
    </div>
  );
  }

export default Header2
