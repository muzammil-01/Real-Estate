import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import "./Slider.css"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

export default function Slider({propertyImages}) {

  const [current, setCurrent] = useState(0);
    const length = propertyImages.length;
    console.log(length)

    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(propertyImages) || propertyImages.length <= 0) {
      return null;
    }
  
  return (
    <>
     <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {propertyImages && propertyImages.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}>
            {index === current && (
              // 
              <img src={`http://localhost:3001/public/images/${slide}`} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
    </section>

    </>
  )
}



{/* {property &&

<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div key={property.id} className="carousel-inner">
  <div className="carousel-item active">
  <img src={`http://localhost:3001/public/images/${property[0].propertyId.propertyImages[0]}`} className="d-block w-100" alt="..." />
  </div>
  </div>
</div>  
} */}