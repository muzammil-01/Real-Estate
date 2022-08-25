import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/bed.jpg'
function Propertycard({ property }) {


    return (
        <div>
       

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
                                        {property.propertyName}
                                    </span>
                                    <br />
                                    $ 714,402
                                    <br />
                                    <span style={{ color: "#109272",  fontWeight:"bold",fontSize: "20px" }}>
                                        TOTAL TOKENS
                                    </span>
                                    <br />
                                    1400
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
                                </p>
                            </div>
                            <div className="up">
                                <div className="expected-income">
                                    <p>
                                        <span style={{ color: "#109272",  fontWeight:"bold", fontSize: "20px" }}>
                                            RENT PER TOKEN
                                        </span>
                                    </p>
                                </div>
                                <div className="digits">
                                    <p>
                                        $ 5.28/YEAR
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Link to={`/propertydetails/${property._id}`} className='view'>View Property</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Propertycard