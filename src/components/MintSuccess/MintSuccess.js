import React from 'react'
import { useNavigate } from 'react-router-dom'

function MintSuccess({count}) {
    const navigate = useNavigate()
    const handleClick = ()=>{
      navigate('/profile')
    }
  return (
    <div className="mintModalBackground">
    <div className="mintModalContainer">
      <div className="mintModaltitle">
        <p>{count} tokens Minted Successfully</p>
      </div>
      <div className="mintModalbody">
      <button className='logbtn' onClick={handleClick}>Continue</button>
      </div>
    </div>
  </div>
  )
}

export default MintSuccess