import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import './Bid.css'
import image from '../../assets/bed.jpg'




function Bid() {
  return (
    <>
    <h3 className='bidding-date' id='bid-date1'>Bidding Will End at : Thursday, 31 March 2022  1:22 am</h3>
    <div className='bid'>
      <div className="highest-bidder-card">
      <h5>Current Highest Bidder</h5>
      <FontAwesomeIcon  icon={faCircleUser} className="user"/>
      <p>Abuzar Khan</p>
      <p>METAMASK ADDRESS</p>
      <p>Bid Time, Date /Month /Year</p>
      <p className='bidding-price'>Bidding Price $ 50,000</p>
      </div>
      <div className="bidding-form-complete">
        <h3 className='bidding-date' id='bid-date2'>Bidding Will End at : Thursday, 31 March 2022  1:22 am</h3>
        <div className="bidding-form">
          <div className='house-image'>
          <img src={image}/>
          </div>
          <div className="form-fields">
            <span>
              <input type="text" placeholder='Enter Name'/>
            </span>
            <br />
            <br />
            <span>
              <input type="text" placeholder='Enter Email'/>
            </span>
            <br />
            <br />
            <span>
              <input type="text" placeholder='Public Key'/>
            </span>
            <br />
            <br />
            <span>
              <input type="text" placeholder='Bid Rent $'/>
            </span>
            <br />
          <button>submit</button>
          <button>Delete</button>
          <button>Update</button>
          <button>Withdraw</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Bid