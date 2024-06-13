"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowUp } from "react-icons/fa";

const TopScroll = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Link href='#header'
        className={`w-10 h-10 bg-white text-black fixed bottom-8 right-8 rounded-full flex items-center justify-center cursor-pointer transition-opacity duration-300 ${showButton ? 'opacity-100' : 'opacity-0 '}`}>
          <FaArrowUp />
        
      </Link>
    </div>
  );
}

export default TopScroll;
