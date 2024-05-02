import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import image from "./images/home-7.jpg";
import image1 from './images/donate-1.jpg'
import image2 from './images/donate-2.jpg'
import './style.css'
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    price: 10.00
  },
  {
    id: 2,
    price: 25.00
  },
  {
    id: 3,
    price: 50.00
  },

  {
    id: 4,
    price: 100.00
  },

  {
    id: 5,
    price: 250.00
  },
]

const Donate = () => {
  const [donate, setDonate] = useState("")
  const navigate = useNavigate()

  const onclickHandeler = (amount) => {
    // console.log("price",amount)
    setDonate(amount)
  }
  // console.log(donate)

  const customFunction = () => {
    setDonate("")
  }

  const onChangeHandeler = (e) => {
    console.log(e.target.value)
    setDonate(e.target.value)
  }

  const clickHand = () =>{
    navigate('/contactus')
  }

  return (
    <div className="donate">
      <Container>
        <div className="donate1">
          <div>
            <h6>DONATE</h6><br />
            <h1>Help to Save Crispy</h1><br />
            <p>We need your help to save Crispy as she needs an expencive surgery.</p>
          </div>

          <div className="img3">
            <img src={image} alt="" />
          </div>

          <div className="progress1">
            <p>
              <span style={{ fontSize: '45px' }}>$2,250</span> of $10,000 raised
            </p>
          </div>

          <div className="progress2">
            <div className="bar1"></div>
          </div>

          <div className="progress3">
            <p>
              <span style={{ fontWeight: 'bold' }}>Notice :</span> Test mode is enabled.
              While in test mode no live donations are processed.
            </p>
          </div>

          <div>
            <input type="text" value={donate} name="" id="" className="input1" placeholder="₹ 100.00" onChange={(e) => onChangeHandeler(e)} />
          </div>

          <div className="btn4">
            {
              data &&
              data.map((e, i) => {
                return (
                  <div key={e.id} onClick={() => onclickHandeler(e.price)}>
                    <Button className="btn3">₹ {e.price}</Button>
                  </div>

                )
              })
            }
            <Button className="btn5" onClick={customFunction}>CUSTOM AMOUMT</Button>

          </div>

          <button className="btn7">Donate Now</button>
        </div>
      </Container>

      <Container>
        <Row style={{ paddingTop: '80px' }}>
          <Col md={6}>
            <div className="img4"><img src={image1} alt="" /></div>

          </Col>
          <Col md={6}>
            <div className="canhelp" style={{ paddingTop: '60px' }}>
              <h6>YOU CAN HELP</h6><br />
              <h2 style={{ fontSize: '45px' }}>Seat on the bus</h2><br />
              <p style={{ fontSize: '19px', width:'95%',margin:'auto' }}>Did you know you help one dog take to the ride of their life to freedom for just $25? You can buy a seat on the bus here!</p><br />

              <button className="btn8" onClick={clickHand}>Buy a seat on the bus</button>
            </div>
          </Col>
        </Row>

        <Row className="seat2" style={{ paddingTop: '80px' }}>

          <Col md={6}>
            <div className="seat1 canhelp"> 
              <h6>VOLUNTEER</h6><br />
              <h2 style={{ fontSize: '40px' }}>Join Our Foster Team!</h2><br />
              <p style={{ fontSize: '19px' }}>Join our foster team today and help us save more lives. Read more about our foster program here.</p><br />

              <button className="btn9" onClick={clickHand}>Join Us</button>
            </div>
          </Col>

          <Col md={6}>
            <div className="img5"><img src={image2} alt="" /></div>

          </Col>
        </Row>
      </Container>


    </div>
  );
};

export default Donate;
