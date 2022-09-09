import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.css'
import Pic from '../../assets/bannerpic.png'

function Banner() {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="text">
        <h1>Fractional And Frictionless RealEstate Investment</h1>
        <p>For the first time, investors around the globe can buy into the real estate market through fully-compliant, fractional, tokenized ownership. Powered by blockchain.</p>
        <div className='getStarted'>
        <Link to="/login" className="getStartedbtn">Get Started</Link>
        </div>
        </div>
        <div className="pic">
          <img src={Pic} alt="" />
        </div>
      </div>
  </div>
  )
}

export default Banner