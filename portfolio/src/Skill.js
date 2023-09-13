import React from 'react'

import Progress from './Progress'
import './skill.css'

function Skill() {
  return (
    <div id='skill' className='skill'>
        <div className='skill-heading'><h1>Skills</h1></div>
        <div className='border-main-1'>
        <div className='border-1'></div>
        </div>
           <Progress/>
           
    </div>
  )
}

export default Skill