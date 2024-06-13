
import React from 'react'
import Styles from '../styles/contact.css'
import { IoIosPin } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Concrete from "../assets/concrete.jpg"

const Contact = () => {
  return (
    <div  className=''>

            
    <div id="contact" className="contact">
      <div className="content mb-16">
      <div className=''>
      <img src={Concrete.src} className='imagine-landing bg-cover object-cover h-full w-full absolute top-0 left-0 z-[-1] opacity-40 scale-y-[-1]'/> 
      </div>
        <h2 className='mt-16' >Contactează-ne</h2>
        <p className='mt-16 lg:mt-4 mb-16'>Daca doresti sa purtam o conversatie fara obligatii, ne poti da un mesaj sau ne poti contacta la unele din variantele de contact de mai jos.

        </p>
        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.9537283110344!2d26.011003477126796!3d44.43411137107591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2015920b7fc03%3A0x6ce6eb10690dc847!2sHashtag%20Men!5e0!3m2!1sro!2sro!4v1718202108019!5m2!1sro!2sro" width="600" height="450"></iframe>
        <div className="container">
          <div className="contactInfo lg:flex lg:pl-[10%]">
            <div className="box">
              <div className="icon"><IoIosPin className="text-white fa-solid fa-location-pin"/></div>
              <div className="text text-white">
                <h3>Adresa</h3>
                <p>Bulevardul Iuliu Maniu 170A, Sector 6, Bucuresti, Romania</p>
              </div>

            </div>

            <div className="box">
              <div className="icon"><FaPhone className="text-white fa-solid fa-phone"/></div>
              <div className="text text-white">
                <h3 className="tlf">Telefon</h3>
                <p className="nr">0774 685 499
                </p>
              </div>

            </div>


            <div className="box">
              <div className="icon"><MdEmail className="text-white fa-solid fa-envelope"/></div>
              <div className="text text-white">
                <h3 className="eml">Email</h3>
                <p className="add">hashtagmen25@gmail.ro</p>
              </div>

            </div>

          </div>

          
          <div className="contactForm bg-black bg-opacity-50 shadow-gray-300 shadow-2xl">
            <form action="https://formsubmit.co/hashtagmen25@gmail.ro" method="POST" autocomplete="off">
              <h2>Trimite un mesaj</h2>
              <div className="inputBox">
                <input  type="text" name="name" className="input bg-transparent" required="required"/>
          <span>Nume</span>
              </div>
              <div className="inputBox">
                <input className="bg-transparent" type="text" name="tel" required="required"/>
                <span>Telefon</span>
              </div>
              <div className="inputBox">
                <input className="bg-transparent" type="email" name="email" required="required"/>
                <span>Email</span>
              </div>
              <div className="inputBox">
                <input type="text" name="mesaj" className="input bg-transparent" required="required"/>
                <span>Mesajul dumneavoastra...</span>
              </div>
              <div className="inputBox">
                <input  type="submit" name="" value="Send"/>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>

    </div>
  )
}

export default Contact
