import React from 'react'
import data from './Data'

import './edu.css'
function Education() {
    console.log(data)
  return (
    <div id='education'>
        <div className='about-heading'><h1>Education</h1></div>
        <div className='border-main-1'>
        <div className='border-1'></div>
        </div>
    <div className='edu'>
       {
        data.map((item)=>{
            return(
                <div className='edu-main'>
                    <h6><span className='key-1'>Program : </span>{item.program}</h6>
                    <h6><span className='key-1'>Institute : </span>{item.Institute}</h6>
                    <h6><span className='key-1'>Passing Year: </span> {item.Passing}</h6>
                    <h6><span className='key-1'>Department : </span>{item.Department}</h6>
                    <h6><span className='key-1'>GPA/CGPA : </span>{item.CGPA}</h6>
                </div>
            )
        })
       }
       </div>
    </div>
  )
}

export default Education