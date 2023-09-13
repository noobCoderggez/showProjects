import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './prog.css'
function Progress() {
    const now1='100%';
    const now2='95%';
    const now3='100%';
    const now4='100%'
    const now5='100%'
  return (
    <div className='prog'>
      <h3>Amazon Experties</h3>
      <ProgressBar variant="my" now={100} label={now1}/>
       <br/>
      <h3>Inventory Management</h3>
      <ProgressBar variant="my" now={95} label={now2}/>
      <br/>

      <h3>Content Creation</h3>
      <ProgressBar variant="my" now={100} label={now3}/>
      <br/>

      <h3>SOP Writing</h3>
      <ProgressBar variant="my" now={100} label={now4}/>
      <br/>

      <h3>SEO </h3>
      <ProgressBar variant="my" now={100} label={now5}/>
    </div>
  )
}

export default Progress