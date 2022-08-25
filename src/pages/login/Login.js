import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../Redux/actions/userActions'
import './Login.css'
import Spinner from '../../components/spinner/Spinner'

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userLogin = useSelector(state => state.userLogin)
  const { loading, error, userInfo } = userLogin


  useEffect(() => {
    if (userInfo) {
      navigate("/")
    }
  }, [navigate, userInfo])


  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }


  
  return (
    <>
      {loading && <Spinner />}
      <div className='login-card'>
        <form className="form" onSubmit={submitHandler} >
          <div className="top">
            <h1 style={{ color: "white" }}>Login</h1>
          </div>
          <br />
          <input
            type="text"
            name="email"
            value={email}
            className="inputs"
            placeholder="Email Address"
            required
            onChange={(e) => setEmail(e.target.value)} />


          <input
            type="password"
            name="password"
            value={password}
            className="inputs"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)} />
          
      {error && <div className="error">{error}</div>}


          <br />
          <button className='logbtn'>Login</button>
          <br />
          <br />
          <br />
          <div className="signup-text">
            <p style={{ color: "white" }}>Not a member?
              <Link to="/signup" className="signupbtn"> Signup now</Link></p>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login