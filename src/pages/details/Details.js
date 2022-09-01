import React from 'react'
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import './Details.css'
import { useSelector } from 'react-redux'
import Spinner from '../../components/spinner/Spinner'

function Details() {

  const propertyDetails = useSelector(state => state.propertyDetails)
  const { loading, error, property } = propertyDetails

  return (
    <>
    {loading && <Spinner/>}
    {property && 
    
      <div className='propertydetails'>
      <h2 className='propertydetails-heading'>PROPERTY DETAILS</h2>
        <div className="property-details">
          <h2>
            <h5> Owner name</h5>
            <span className='gapleft'>{property[0].propertyId.ownerName}</span>
          </h2>
          <h2>
            <h5> Property Contract Address</h5>
            <span className='gapleft'>{property[0].propertyId.PropertyContractAddress}</span>
          </h2>
          <h2>
            <h5> Property Contract Owner </h5>
            <span className='gapleft'>{property[0].propertyId.OwnerWalletAddress}</span>
          </h2>
          <h2>
            <h5>Area</h5>
            <span className='gapleft'>  
            {property[0].propertyId.size} sqft</span>
          </h2>
          <h2>
            <h5>Bedrooms</h5>
            <span className='gapleft'>  
            {property[0].propertyId.beds}
            </span>
          </h2>
          <h2>
            <h5>Bathrooms</h5>
            <span className='gapleft'> 
            {property[0].propertyId.baths} 
            </span>
          </h2>
          <h2>
            <h5>Country</h5>
            <span className='gapleft'>   
            {property[0].propertyId.country}
            </span>
          </h2>
          <h2>
            <h5>City</h5>
            <span className='gapleft'>
              {property[0].propertyId.city}
              </span>
          </h2>
          <h2>
            <h5>Address</h5>
            <span className='gapleft'>
              {property[0].propertyId.propertyAddress}
              </span>
          </h2>
          <h2>
            <h5>Postal code</h5>
            <span className='gapleft'> 
            {property[0].propertyId.postalcode}
            </span>
          </h2>
          <h2>
            <h5>Type</h5>
            <span className='gapleft'>undefined</span>
          </h2>
          
    </div>
    </div>
}
    </>
  )
}

export default Details