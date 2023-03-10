import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import img1 from "../assests/3.jpg"
import img2 from "../assests/4.jpg"
import  "react-responsive-carousel/lib/styles/carousel.min.css"

export const Services = () => {
  return (
    
    <div className="services">

    <Carousel infiniteLoop autoPlay showArrows={false} showStatus={false}
    interval={1500}
    showThumbs={false}>

        <div>
            <img src={img1} alt="Item1" />
            <p className='legend'>Full Stack</p>
        </div>

        <div>
            <img src={img2} alt="Item2" />
            <p className='legend' >Networking</p>
        </div>
    </Carousel>

    </div>

  )
}
