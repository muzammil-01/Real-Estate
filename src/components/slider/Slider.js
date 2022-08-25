import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'

export default function Slider() {
  const imgArr = []

  const propertyDetails = useSelector(state => state.propertyDetails)
  const { loading, error, property } = propertyDetails

  if(property){
   for(let i = 0 ; i< property.propertyImages.length; i++){
      imgArr.push(property.propertyImages[i])    
   }
  }
  if(imgArr.length !== 0){

    console.log(imgArr)
  }


  return (
    <>
    {property &&

<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div key={property.id} className="carousel-inner">
  <div className="carousel-item active">
  <img src={`http://localhost:3001/public/images/${imgArr[0]}`} className="d-block w-100" alt="..." />
  </div>
  </div>
</div>  
}

    </>
  )
}
