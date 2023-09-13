import React from 'react'
import { BiLogoGmail,BiSolidPhoneCall, } from "react-icons/bi";
import { FaLinkedin,FaFacebookSquare } from "react-icons/fa";

import './contact.css'
function Contact() {
  return (
    <div id='contact' className='contact-main'>
       
        <div className='contact'>
            <h6>Lets's Talk!</h6>
            <div>
          <BiLogoGmail size={30}/>&nbsp;&nbsp;tnusratjahan06@gmail.com
          </div>
          <div>
          <BiSolidPhoneCall size={30}/>&nbsp;&nbsp;+88 01305218297
          </div>
          
        </div>
       
        <div className='follow'>
            <h6>Follow Me:</h6>
            <div className='social-media-2'>
                    <a href='https://www.linkedin.com/in/nushrat-jahan-tisha-787a8a1b9'><FaLinkedin size={30}/></a>
                    <a href='https://www.facebook.com/lev.arone?mibextid=ZbWKwL' ><FaFacebookSquare size={30}/></a>
                 </div>
        </div>
    </div>
  )
}

export default Contact