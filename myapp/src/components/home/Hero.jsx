import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import image2 from './images/home-2.jpg'
import image3 from './images/home-3.jpg'
import image4 from './images/home-4.jpg'
import image5 from './images/home-5.jpg'
import './style.css'
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    title: "Adopt",
    description: "Visit with our pets ready for adoption. Come to meet your perfect match today!",
    images: `${image2}`,
    button: "Meet Pets",
  },
  {
    id: 2,
    title: "Foster",
    description: "Join our foster team today and help us save more lives. Read more about our foster program.",
    images: `${image3}`,
    button: "Help to Foster",
  },
  {
    id: 3,
    title: "Donate",
    description: " There Every little bit counts! Your genereous donation helps animals most in need.",
    images: `${image4}`,
    button: "How to Give ?",
  },

  {
    id: 4,
    title: "Volunteer",
    description: "if You can help any animals that we would otherwise i am not be able to facilitate",
    images: `${image5}`,
    button: "Welcome !",
  },
];

const Hero = () => {

  const navigate = useNavigate()

  const clickHand = () => {
    navigate('/adoption')
  }

  const onclickHand = ()=>{
    navigate('/contactus')
  }

  return (
    <div>
      <div className="img1">
        <div className="care">
          <h1 style={{ fontSize: '45px', marginBottom: '40px' }} >Do You Care ?</h1>
          <h3 style={{ fontSize: '30px', marginBottom: '40px' }} >We Do.</h3>
          <h5 style={{ fontSize: '20px', marginBottom: '40px' }} >
            More than 155 pets so far<br />found home with our help this year
          </h5>
          <button className="btn1" onClick={onclickHand}>Get Involved</button>
        </div>
      </div>

      <div className="friend">
        <div style={{ color: 'white', paddingTop: '50px' }} >
          <h1>
            Your Next <br /> Best Friend is Waiting
          </h1>
          <br />
          <h5 style={{ color: 'rgb(220, 149, 36)',width:'50%',margin:'auto' }}>
            We believe that all pets deserve a second chance at a new life. Its
            not about being perfect, its about being perfect for one
            another.
          </h5>
          <br /><br />
        </div>

        <Container fluid>
          <Row>
            {data &&
              data.map((elem, ind) => {
                return (
                  <Col md={3} key={ind}>
                    <div>
                      <Card className="card1" >
                        <Card.Img variant="top" style={{ width: '95%' }} src={elem.images} />
                        <Card.Body>
                          <Card.Title><h1>{elem.title}</h1></Card.Title>
                          <Card.Text>{elem.description}</Card.Text>
                          <button className="btn2" onClick={clickHand}>{elem.button}</button>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
