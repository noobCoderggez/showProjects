import React from 'react'
import './work.css'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Work() {


  return (
    <div id='port'>
<div className='about-heading'><h1>Portfolio</h1></div>
        <div className='border-main-1'>
        <div className='border-1'></div>
        </div>
  <div className='port-main'>
   <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <a href='https://docs.google.com/document/d/1l2tK06YsKzAeR-auJoloQHNejzkbXF92Gz3nkezb8KA/edit?usp=sharing'>
        <img
          className="d-block w-10"
          src='https://imgs.search.brave.com/vWJHxSZZGl3ImJy73v8LnC_ZqcGe78blBl_8JdEvbXQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI0/OTAyNjkyNS9waG90/by93b21hbi1pcy10/eXBpbmctb24tYS1s/YXB0b3Ata2V5Ym9h/cmQtd2hpbGUtbHlp/bmctb24tYS1zb2Zh/LWF0LWhvbWUtaW4t/dGhlLWRhcmsud2Vi/cD9iPTEmcz0xNzA2/NjdhJnc9MCZrPTIw/JmM9aTRqWlhWSWhC/LW8yalVTUjMzSWkx/Q3RmV1FPU3htdDFG/dWlsTDJJaE9Cbz0'
        />
        </a>
        <Carousel.Caption>
          
          <p>Content Article For Amazon</p>
        </Carousel.Caption>
      </Carousel.Item>
    
    <Carousel.Item>
        <a href='https://drive.google.com/drive/folders/1TijUpjOhH7qD2txjpg4pQ6osSNXKG5ki?usp=drive_link'><img
          className="d-block w-10"
          src='https://imgs.search.brave.com/e9AkBJ51qJL7pj6yd5wkvTHvVRINaCcKGDwbAH9uhA4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MDU2ODI2MzQ5MDQt/ZDdjOGQ5NWNkYzUw/P2l4bGliPXJiLTQu/MC4zJml4aWQ9TTN3/eE1qQTNmREI4TUh4/elpXRnlZMmg4TVRa/OGZIZHlhWFJwYm1k/OFpXNThNSHg4TUh4/OGZEQT0mdz0xMDAw/JnE9ODA.jpeg'
        />
        </a>
        <Carousel.Caption>
          
          <p>Sop Article For Amazon</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <a href='https://docs.google.com/document/d/1GMz1FsrluOif6SP6dhTXcqPJQbTZDaXkl1b5VFXP_bc/edit?usp=sharing'><img
          className="d-block w-10"
          src='https://imgs.search.brave.com/GhAFch-kLRavi1PmCEHtspvIJIEltBSK81aiw0jVC_M/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MzQxMjAwNDUxOTEt/ODllNDk2Mzk4MGE3/P2l4bGliPXJiLTQu/MC4zJml4aWQ9TTN3/eE1qQTNmREI4TUh4/elpXRnlZMmg4T0h4/OGJXRnVKVEl3ZDNK/cGRHbHVaM3hsYm53/d2ZId3dmSHg4TUE9/PSZ3PTEwMDAmcT04/MA.jpeg'
        />
        </a>
        <Carousel.Caption>
          
          <p>Content Article For Amazon</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  )
}

export default Work