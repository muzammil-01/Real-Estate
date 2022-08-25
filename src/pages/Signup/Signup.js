import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../Redux/actions/userActions'
import { useNavigate } from 'react-router-dom'
import './Signup.css'
import Spinner from '../../components/spinner/Spinner'
import SuccessModal from '../../components/success modal/SuccessModal'

function Signup() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userRegister = useSelector(state => state.userRegister)
  const { loading, error, userInfo } = userRegister


  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [image, setImage] = useState([])
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (userInfo) {
      navigate("/")
    }
  }, [navigate, userInfo])
  




  const uploadFileHandler = async (e) => {
    e.preventDefault()

    const arr = []
    for (let i = 0; i < e.target.files.length; i++) {
      arr.push(e.target.files[i])
    }

    const formData = new FormData()
    for (let i = 0; i < arr.length; i++) {
      formData.append('image', arr[i])
    }

    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('http://localhost:3001/api/upload', formData, config)
      for (let i = 0; i < data.length; i++) {
        image.push(data[i])
      }
      setUploading(false)
    } catch (error) {
      console.log(error.message)
      setUploading(false)
    }
  }


  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
      setShow(true)

      setTimeout(() => {
        setShow(false)
      }, 2000);

    }
    else {
      dispatch(register(name, email, password, image))
    }
  }
  return (
    <>
      {loading && <Spinner />}
      <div className='signup-box'>
        <form className="signup-form" onSubmit={submitHandler} encType="multipart/form-data">
          <div className="top">
            <h1 style={{ color: "white" }}>Create Account</h1>
            <h4 style={{ color: "white" }}>It's free and only takes a minute</h4>
          </div>

          <input
            type="text"
            className="inputs"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name" />


          <input
            type="email"
            className="inputs"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address" />
            {error && <div className='error'>{error}</div>}


          <input
            type="Password"
            className="inputs"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required minLength={5} />


          <input
            type="Password"
            className="inputs"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required minLength={5} />

            {show && message && <div className='error'>{message}</div>}

          <input
            type='file'
            id='image-file'
            label='Choose File'
            onChange={uploadFileHandler}
          />
          {uploading && <Spinner />}

          <button className='submitbtn'>Submit</button>
          <p>
            By clicking the Sign Up button, you agree to our
            <br />
            <span style={{ color: "#109272" }}>Terms and Conditions</span> and <span style={{ color: "#109272" }}>Privacy Policy</span>
          </p>
          <p className='para-2'>Already have an account? <Link to="/login">Login here</Link></p>
        </form>
      </div>
      {loading && <Spinner />}
    </>
  )
}

export default Signup