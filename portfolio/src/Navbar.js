import React, { useState } from 'react'
import {HashLink as Link} from 'react-router-hash-link'
import { FaListUl } from "react-icons/fa";
import './navbar.css'
import Home from './Home';
import About from './About';
import Skill from './Skill';
import Education from './Education';
import Work from './Work';
import Experience from './Experience';
import Contact from './Contact';

function Navbar() {

    const [showMediaIcon,setShowMediaIcon]=useState(true)

    const toggle=()=>{
    setShowMediaIcon(!showMediaIcon)
    console.log(showMediaIcon)
    }
  return (
    <div>
        <nav className='main-nav'>
            <div className='logo'>
                <h2 className='text-logo'>Tisha</h2>
            </div>
            <div className='menu-link'>
              <Link smooth to='#home'>Home</Link>
              <Link smooth to='#about'>About</Link>
              <Link smooth to='#education'>Education</Link>
              <Link smooth to='#skill'>Skills</Link>
              <Link smooth to='#exp'>Experiences</Link>
              <Link smooth to='#port'>Portfolio</Link>
             
              <Link smooth to='#contact'>Contact</Link>
            </div>

            <div className='hamburger-menu'>
            <Link to='' onClick={toggle}><FaListUl/></Link>
            </div>


            <div className={showMediaIcon?"mobile-link":"menu-link"}>
              <Link smooth to='#home' onClick={toggle}>Home</Link>
              <Link smooth to='#about' onClick={toggle}>About</Link>
              <Link smooth to='#education' onClick={toggle}>Education</Link>
              <Link smooth to='#skill' onClick={toggle}>Skills</Link>
              <Link smooth to='#exp' onClick={toggle}>Experiences</Link>
              <Link smooth to='#port' onClick={toggle}>Portfolio</Link>
             
              <Link smooth to='#contact' onClick={toggle}>Contact</Link>
              </div>
             
        </nav>
       
        <Home/>
        <About/>
        <Education/>
        <Skill/>
        <Experience/>
        <Work/>
        <Contact/>
        
    </div>
  )
}

export default Navbar