import React , {useEffect, useState}from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Banner from '../../components/Banner/Banner'
import About from '../../components/About/About'
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Spinner from '../../components/spinner/Spinner'
function Home() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)     
    }, 500)
    

  }, [])
  return (
    <div>
      {loading ? 
      <Spinner/>
      :
      <div>
      <Navbar/>
      <Banner/>
      <About/>
      <Footer/>
      </div>
    }
    </div>
  )
}

export default Home