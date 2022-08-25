import React from 'react'
import { useNavigate } from 'react-router-dom'
import Successful from '../../assets/submit-successfully.png'
import './SuccessModal.css'

export default function SuccessModal() {
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate('/')
  }
  return (
    <div className="success-container">
    <div className="row">
      <div className="modalbox success col-sm-8 col-md-6 col-lg-5 center animate">
        <h1>Great!</h1>
        <img className="rukjao" src={Successful} alt="" />
        <p>your property has been  submitted
          <br />successfully</p>
          <button className='logbtn' onClick={handleClick}>Continue</button>
      </div>
    </div>
  </div>
    
  )
}
