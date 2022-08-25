import { Link, NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { ethers } from 'ethers'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../Redux/actions/userActions'
import Logo from '../../assets/logo.png'
import { useState,useEffect } from 'react'
import {connect,get_Signer} from '../../Redux/actions/connectWalletAction'



const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  const [product,setProduct] = useState([])

  const logoutHandler = () => {
    dispatch(logout())
  }

  const connectHandler = async (e) => {
    e.preventDefault()
    dispatch(connect())
  }

  const handleSearch = async (e) =>{
    let key = e.target.value
    if(key){

      let result = await fetch(`http://localhost:3001/search/${key}`);
      result = await result.json();
      if(result){
        setProduct(result)
      }
      console.log(product)
    }
    else{
      console.log("hello world")
    }
    }



  return (
    <div>
      <input type="checkbox" id="check" />
      <nav>
        <div className="icon">
          <img src={Logo} alt="logo" />
        </div>

          <div className="search_box">
          <input type="search" placeholder="Search here" onChange={handleSearch}/>
          <span className="fa fa-search"/>
        </div>

        <ol>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {userInfo &&
            <li>
            <NavLink to="/addproperty">Add property</NavLink>
          </li>
            }
          <li>
            <NavLink to="/marketplace">Market Place</NavLink>
          </li>
          <li>
          </li>
          <li>
            {userInfo ? <div className="dropdown">
              <button className="dropbtn">{userInfo.name}   <FontAwesomeIcon icon={faCaretDown} className="caretDown"/></button>
              <div className="dropdown-content">
                <Link to="/" onClick={logoutHandler}>Logout</Link>
                <Link to="/profile">Profile</Link>
                <button onClick={connectHandler} className='connect-wallet'>connect wallet</button>
              </div>
            </div> :
              <NavLink to="/login">Login/Signup</NavLink>}
          </li>


        </ol>
        <label htmlFor="check" className="bar">
          <span className="fa fa-bars" id="bars" />
          <span className="fa fa-times" id="times" />
        </label>
      </nav>
    </div>
  )
}

export default Navbar