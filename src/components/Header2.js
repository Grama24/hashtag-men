"use client"
import React, { useState } from 'react';
import Style from '../styles/navbar.css';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from "../assets/logomen.png"

const Header2 = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleLinkClick = () => {
    setIsChecked(false); // Set isChecked state to false when a link is clicked
  };

  return (
    <div>
      <header className="header py-8 justify-center" id="header">
        <div className='w-[1250px] flex flex-row items-center justify-between'>

      
        <Link className="text-white text-2xl" href="/">
         <img src={Logo.src} className='w-[200px] xs:w-[180px] logo'/>
        </Link>

        <input
          type="checkbox"
          id="check"
          checked={isChecked} // Use isChecked state to control the checkbox
          onChange={() => setIsChecked(!isChecked)} // Toggle isChecked state when checkbox is clicked
        />
        <label htmlFor="check" className="icons">
          <FaBars size={30} className="bx bx-menu" id="menu-icon" />
          <FaTimes size={30} className="bx bx-x" id="close-icon" />
        </label>

        <nav className="navbar">
          <Link href="#despre" style={{ "--i": 0 }} onClick={handleLinkClick}>
            Despre Noi
          </Link>
          <Link
         
            href="#preturi"
            style={{ "--i": 1 }}
            onClick={handleLinkClick}
          >
            Prețuri
          </Link>
          <Link
            href="#contact"
            style={{ "--i": 2 }}
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </nav>
        </div>
      </header>
    </div>
  );
};

export default Header2;
