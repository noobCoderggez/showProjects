import React from 'react'
import './home.css'



import { FaLinkedin,FaWhatsapp,FaFacebookSquare } from "react-icons/fa";
function Home() {
  return (
    <div id='home' className='home'>
        <div className='home-main'>
        <div className='home-pic'>
            
                <div className='main-pic'>
                    <img src={require('./2.jpg')} alt=''/>
                </div>
                
            </div>
            <div className='home-hero'>
                <div>
                 <div className='home-detail'>
                    <h1>Hi,</h1>
                    <h1>I am <span className='name'>Nushrat Jahan Tisha</span></h1>
                    <h1>Freelancer</h1>
                 </div>
                 <div className='btn'>
                   <a href='https://www.linkedin.com/in/nushrat-jahan-tisha-787a8a1b9'><button className='btn-1'>Connect</button></a>
                 </div>

                 <div className='social-media'>
                    <a href='https://www.linkedin.com/in/nushrat-jahan-tisha-787a8a1b9'><FaLinkedin/></a>
                    <a href='https://wa.me/+8801305218297'><FaWhatsapp/></a>
                    <a href='https://www.facebook.com/lev.arone?mibextid=ZbWKwL' ><FaFacebookSquare/></a>
                 </div>
                 </div>
            </div>
            
            
        </div>
        
    </div>
  )
}

export default Home