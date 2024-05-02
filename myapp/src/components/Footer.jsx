import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footers'>
      <div style={{ paddingTop: '50px' }}>
        <a href=""><img src="https://animal-rescue.cmsmasters.net/pet-shelter/wp-content/uploads/sites/5/2022/11/logo-pet-shelter-footer.svg" alt="" /></a>
      </div>

      <Container fluid>
        <Row  className='footer1' style={{ padding: '100px 40px 0 40px' }}>
          <Col md={4}>
            <div className='info1'>
              <h1>Adoption Info</h1>
              <p><a href="/aboutus">About Us</a></p>

              <p><a href="/adoption">Adopt a Pet</a></p>

              <p><a href="/contactus">Contact Us</a></p>

              <p><a href="/aboutus">Image Credits</a></p>

              <p><a href="/shop">Shop</a></p>
            </div>
          </Col>
          <Col md={4}>
            <div className='info1'>
              <h1>Donate</h1>
              <p><a href="/contactus">Donate Naw</a></p>
              <p><a href="/ourblog">Our Blog</a></p>
              <p><a href="/shop">Wish List</a></p>
              <p><a href="/contactus">Other ways to Help</a></p>
              <p><a href="/adoption">Sponsorship</a></p>
            </div>
          </Col>
          <Col md={4}>
            <div className='info2'>
              <h5>Subscribe to get our latest news</h5>

              <p className='info3'><input type="text" placeholder='Enter your email*' name="" id="" /><span><button className='infobtn'>Subscribe</button></span></p>

              <div className='info4'>
                <p><a href=""><FaFacebookF /></a></p>
                <p><a href=""><CiInstagram /></a></p>
                <p><a href=""><FaYoutube /></a></p>
                <p><a href=""><FaTwitter /></a></p>
              </div>
            </div>
          </Col>
          <h2 className='line'></h2>

          <p className='line1'><a href="">cmsmasters </a> ©2024 - All Rights Reserved - This is a sample website.</p>

        </Row>
      </Container>

    </div>)
}

export default Footer