import React from 'react'
import { useNavigate } from 'react-router-dom'
import Successful from '../../assets/submit-successfully.png'



function SuccessPurchase({count}) {
    const navigate = useNavigate()
    const handleClick = ()=>{
      navigate('/profile')
    }
  return (
    <div className="success-container">
    <div className="row">
      <div className="modalbox success ">
        <h1>Great!</h1>
        <img className="rukjao" src={Successful} alt="" />
        <p>{count} Tokens purchased successfully</p>
          <button className='countBtn' onClick={handleClick}>Continue</button>
      </div>
    </div>
  </div>
  )
}

export default SuccessPurchase