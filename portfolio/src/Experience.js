import React from 'react'
import data from './exp.json'
import './exp.css'
function Experience() {
  return (
    <div id='exp' className='exp'>
        <div className='about-heading'><h1>Job Experiences</h1></div>
        <div className='border-main-1'>
        <div className='border-1'></div>
        </div>
        <div className='exp-main'>
           
            {
               data.map((item)=>{
                return(

                    <div className='exp-con'>
                         <div>
                    <h6><span className='key-1'>Institute : </span>{item.name}</h6>
                    <h6><span className='key-1'>Address : </span>{item.address}</h6>
                    <h6><span className='key-1'>Position : </span> {item.position}</h6>
                    <h6><span className='key-1'>Duration : </span>{item.duration}</h6>
                    </div>
                </div>
                    
                )
               })
            }
        </div>
    </div>
  )
}

export default Experience