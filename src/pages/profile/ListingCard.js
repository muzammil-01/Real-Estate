import React from 'react'
import { Link } from 'react-router-dom'
import './Profile.css'
import Bed from '../../assets/bed.jpg'

function ListingCard({ property }) {
  return (
    <>
        <div className="ListingCards">
          <img src={Bed} alt="" />
          <h2> {property.propertyName}</h2>
          <h3>Bed: {property.beds}</h3>
          <h3>Bath: {property.baths}</h3>
          <Link to={`/propertydetails/${property._id}`} className='view'>View Property</Link>
        </div>
    </>
  )
}

export default ListingCard