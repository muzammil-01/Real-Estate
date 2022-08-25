import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>

<footer className="site-footer">
  <div className="container">
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <h5>Welcome To FypLand</h5>
        <p className="text-justify"><i>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt ea corporis autem laboriosam! Explicabo aliquid quibusdam quia, similique voluptates laborum repudiandae alias cumque delectus ullam earum minus at sint dolorem.</i></p>
      </div>
      <div className="col-xs-6 col-md-3">
        <h5>TEXT</h5>
        <ul className="footer-links">
          <li><a href="#">Careers</a></li>
          <li><a href="#">FAQ's</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div className="col-xs-6 col-md-3">
        <h5>Quick Links</h5>
        <ul className="footer-links">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Login/Signup</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
    <hr />
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-8 col-sm-6 col-xs-12">
        <p className="copyright-text">Copyright © 2017 All Rights Reserved by  <a href="#">FypLand</a>.
        </p>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <ul className="social-icons">
          <li><a className="facebook" href="#"><i className="fab fa-facebook-f" /></a></li>
          <li><a className="twitter" href="#"><i className="fab fa-twitter" /></a></li>
          <li><a className="linkedin" href="#"><i className="fab fa-linkedin-in" /></a></li>   
        </ul>
      </div>
    </div>
  </div>
</footer>
    </>
  )
}

export default Footer