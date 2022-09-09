import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'


function SearchCard({property}) {
  return (
    <>
    <Navbar/>
         <div className='market-card'>
        <div className='content' >
            <div className='image'>
                <img src={`http://localhost:3001/public/images/${property.propertyImages[0]}`} alt="" />
            </div>
            <div className='details'>
                <div className='pricing'>
                    <div className='total-price'>
                        <p>
                            <span style={{ fontSize: "20px",color: "#109272",  fontWeight:"bold", textTransform:"uppercase"}}>
                                Property price
                            </span>
                            <br />
                            {property.propertyPrice} $
                            <br />
                            <span style={{ color: "#109272",  fontWeight:"bold",fontSize: "20px" }}>
                                TOTAL TOKENS
                            </span>
                            <br />
                            1400
                            <br/>
                            <span style={{ color: "#109272",  fontWeight:"bold",fontSize: "20px" }}>
                                Country
                            </span>
                            <br />
                            {property.country}
                        </p>
                    </div>
                    <div className="token-price">
                        <p>
                            <span style={{ color: "#109272",  fontWeight:"bold", fontSize: "20px" }}>
                                TOKEN's PRICE
                            </span>
                            <br />
                            $ 50.31
                            <br />
                            <span style={{ color: "#109272",  fontWeight:"bold", fontSize: "20px" }}>
                                Available TOKEN's
                            </span>
                            <br />
                            500
                            <br/>
                            <span style={{ color: "#109272",  fontWeight:"bold", fontSize: "20px" }}>
                               City
                            </span>
                            <br />
                            {property.city}
                        </p>
                    </div>
                 
                    
                </div>      <p>
                                 <span style={{ color: "#109272",  fontWeight:"bold", fontSize: "20px" }}>Address:</span> {property.propertyAddress}
                            </p>
                <Link to={`/propertydetails/${property._id}`} className='view'>View Property</Link>
            </div>
        </div>
    </div> 
    </>
  )
}

export default SearchCard