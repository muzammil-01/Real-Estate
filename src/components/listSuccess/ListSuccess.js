import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Successful from '../../assets/submit-successfully.png'

function ListSuccess({count, propertyId}) {
    const navigate = useNavigate()

    const handleClick = ()=>{
      navigate(`/propertydetails/${propertyId}`)
    }
  return (
    <div className="success-container">
    <div className="row">
      <div className="modalbox success ">
        <h1>Great!</h1>
        <img className="rukjao" src={Successful} alt="" />
        <p>{count} Tokens listed successfully</p>
          <button className='countBtn' onClick={handleClick}>Continue</button>
      </div>
    </div>
  </div>
  )
}

export default ListSuccess