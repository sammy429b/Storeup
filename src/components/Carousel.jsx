import React from 'react'
import img1 from '../Data/banner_kids.png'
import img2 from '../Data/banner_mens.png'
import img3 from '../Data/banner_women.png'
function Carousel() {

      
      
    return (
        <>
            <div className="w-full carousel rounded-box">
                <div className="carousel-item w-full">
                    <img src={new URL(`${img2}`, import.meta.url).href} id="item1" className="w-full" alt="Tailwind CSS Carousel component" />
                </div>
                <div className="carousel-item w-full">
                    <img src={new URL(`${img3}`, import.meta.url).href} id="item2" className="w-full" alt="Tailwind CSS Carousel component" />
                </div>
                <div className="carousel-item w-full">
                    <img src={new URL(`${img1}`, import.meta.url).href} id="item3" className="w-full" alt="Tailwind CSS Carousel component" />
                </div>
            </div>
        </>
    )
}

export default Carousel;