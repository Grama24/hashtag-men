
import React from 'react'
import Styles from '../styles/contact.css'
import { IoIosPin } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


const Contact = () => {
  return (
    <div className='bg-slate-200'>

            
    <div className="contact">
      <div className="content">
        <h2>Contacteaza-ne</h2>
        <p className='mt-16 mb-16'>Daca doresti sa purtam o conversatie fara obligatii, ne poti da un mesaj sau ne poti contacta la unele din variantele de contact de mai jos.

        </p>

        <div className="container">
          <div className="contactInfo">
            <div className="box">
              <div className="icon"><IoIosPin className="text-white fa-solid fa-location-pin"/></div>
              <div className="text">
                <h3>Adresa</h3>
                <p>Strada strazii, nr 123, Sector 2, Bucuresti, Romania</p>
              </div>

            </div>

            <div className="box">
              <div className="icon"><FaPhone className="text-white fa-solid fa-phone"/></div>
              <div className="text">
                <h3 className="tlf">Telefon</h3>
                <p className="nr">072391823</p>
              </div>

            </div>


            <div className="box">
              <div className="icon"><MdEmail className="text-white fa-solid fa-envelope"/></div>
              <div className="text">
                <h3 className="eml">Email</h3>
                <p className="add">support@cmdextern.com</p>
              </div>

            </div>

          </div>

          
          <div className="contactForm bg-yellow-600">
            <form action="https://formsubmit.co/grama.andrei2002@gmail.com" method="POST" autocomplete="off">
              <h2>Trimite un mesaj</h2>
              <div className="inputBox">
                <input  type="text" name="name" className="input bg-yellow-600" required="required"/>
          <span>Username</span>
              </div>
              <div className="inputBox">
                <input className="bg-yellow-600" type="text" name="company" required="required"/>
                <span>Compania</span>
              </div>
              <div className="inputBox">
                <input className="bg-yellow-600" type="email" name="email" required="required"/>
                <span>Email</span>
              </div>
              <div className="inputBox">
                <input type="text" name="mesaj" className="input bg-yellow-600" required="required"/>
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
