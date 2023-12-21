import React from 'react'
import img1 from '../Data/banner_kids.png'
import img2 from '../Data/banner_mens.png'
import img3 from '../Data/banner_women.png'
function Carousel() {

      
      
    return (
        <>
            <div className="w-full carousel rounded-box">
                <div className="carousel-item w-full">
                    <img src={img2} id="item1" className="w-full" alt="Tailwind CSS Carousel component" />
                </div>
                <div className="carousel-item w-full">
                    <img src={img3} id="item2" className="w-full" alt="Tailwind CSS Carousel component" />
                </div>
                <div className="carousel-item w-full">
                    <img src={img1} id="item3" className="w-full" alt="Tailwind CSS Carousel component" />
                </div>
            </div>
        </>
    )
}

export default Carousel;