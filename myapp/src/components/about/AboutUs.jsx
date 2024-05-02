import React, { useEffect, useState } from 'react'
import BreadCrumbComp from '../common/BreadCrumbComp'
import './about.css'
import axios from 'axios'
import { Card, Col, Container, Row } from 'react-bootstrap'
import img1 from '../../image/about-6.jpg'
import img2 from '../../image/about-7.jpg'

const AboutUs = () => {

  const [about, setAbout] = useState([]);
  const [path, setPath] = useState("")

  useEffect(() => {
    axios.get('http://localhost:3002/get-aboutus')
      .then((res) => {
        // console.log(res.data.data)
        setAbout(res.data.data)
        setPath(res.data.filepath)
      })
      .catch((err) => {
        console.log(err)
      })
  },[])

  return (
    <div>
      <div className='about'>
        <BreadCrumbComp title='About Us' crumb='About Us' />
      </div>

      <div className='about1'>
        <Container>
          <div >
            <h1 className='ourvision' style={{ height: '150px', width: '65%',margin:'auto',padding:'70px 0 50px 0' }}>Our vision is for all animals to live a life free of cruelty and suffering.</h1>
          </div>

          <Row>
            {
              about &&
              about.map((elem, ind) => {
                return (
                  <Col md={3} key={ind}>
                    <div className='about4' style={{ minHeight: '450px' , marginTop:'70px' }}>
                      <Card style={{ width: '100%', border: 'none', backgroundColor: 'transparent' }}>
                        <Card.Img variant="top" style={{ borderRadius: '3%' }} src={path + '/' + elem.image} />
                        <Card.Body>
                          <Card.Title><h4>{elem.name}</h4></Card.Title>
                          <Card.Text>
                            <p>{elem.description}</p>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>

                  </Col>
                )
              })
            }
            <hr />
          </Row>

          <div style={{ minHeight: '900px', marginTop: '80px' }}>
            <h1 style={{ marginBottom: '30px' }}>Our Story</h1>
            <p>While many organizations, including Greater Good Charities, focus resources on helping people and pets fleeing Ukraine, there is a desperate need to provide emergency relief to those remaining in Western Ukraine. While pet food and supplies will be needed long term, the most urgent need is cash donations to quickly purchase products in neighboring countries to ship in. With Kormotech’s presence in the country and its partner’s ability to source donations, Save Pets of Ukraine is uniquely positioned to help those remaining in Ukraine.</p>

            <img style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '6px', marginTop: '20px' }} src={img1} alt="" />

          </div>

          <div style={{ minHeight: '500px' }}>
            <p>Patients were stratified into a younger (under 60) group and an older (over 60) group, and symptoms were clustered into broader clinical syndromes associated with COVID-19 and classified into case definitions, including ‘Cerebrovascular event (abnormalities of the blood flow in the brain)’, ‘Altered Mental Status’, ‘Peripheral Neurology’, and ‘Encephalitis’. Members of these professional organizations identified patients exhibiting these syndromes and a swift 5-minute clinical dataset was completed. It contained four critical components</p>

            <img style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '6px', marginTop: '20px' }} src={img2} alt="" />

            <p style={{ margin: '40px 0 60px 0' }}>Animals are suffering in Ukraine, with hundreds of thousands of dogs and cats living on the war-torn streets without their families, with rescue centres also bursting at the seams. Save Pet of Ukraine is a rallying cry for pet lovers across the UK to provide the desperate food and supplies required to keep these animals alive.</p>

          </div>

          <div className='about2'>
            <div className='about3'>
              <h6 style={{ fontSize: '19px', color: '#762739', marginBottom: '30px' }}>Our Mission</h6>
              <h1 style={{ fontSize: '45px', marginBottom: '50px' }}>We identify the problems facing animal rescue volunteers and shelters and help to solve them physically and by providing information.</h1>

              <button className='ourbtn1'>Donate</button>
            </div>

          </div>
        </Container>
      </div>
    </div>
  )
}

export default AboutUs