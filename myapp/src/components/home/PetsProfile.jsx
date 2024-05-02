import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap'
import { truncate } from '../util';
import './style.css'

const PetsProfile = () => {

  const [profiles, setProfiles] = useState([]);
  const [path, setPath] = useState("");
  const [visibleData, setVisibleData] = useState(6)

  useEffect(() => {
    axios.get('http://localhost:3002/get-adoptions')
      .then((res) => {
        // console.log(res.data.data)
        setProfiles(res.data.data)
        setPath(res.data.filepath)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const loadMore = () => {
    setVisibleData(visibleData + 3)
    // const newData1 = visibleData + 3
    // setVisibleData(Math.min(newData1, profiles.langth))
  }

  const hidden = visibleData < profiles.length

  return (
    <div style={{ backgroundColor: '#fbf6f3', minHeight: '1700px', width: '100%' }}>

      <div className='areYou' style={{ paddingTop: '70px' }}>
        <h2 style={{ fontSize: '40px', marginBottom: '30px' }}>Are you looking for a new companion?</h2>
        <p style={{ fontSize: '20px', width: '45%', margin: 'auto' }}>Our available pets list is updated daily. Please read our adoption policies as well as each pet’s profile before applying.</p>

      </div>

      <Container fluid>
        <Row className='Row1' style={{ padding: '50px', }}>
          {
            profiles &&
            profiles.slice(0, visibleData).map((elem, ind) => {
              return (
                <Col md={4} kiy={ind}>
                  <Card className='card3' style={{ width: '98%', marginBottom: '20px', backgroundColor: '#fbf6f3' }}>
                    <Card.Img variant="top" className='petimg' src={path + '/' + elem.image} />

                    <Card.Body style={{ textAlign: 'left' }}>
                      <Card.Title><h4 className='petname'>{elem.name}</h4></Card.Title>
                      <Card.Title><h5 className='petname1' style={{ color: '#a13738' }}>{elem.breed}</h5></Card.Title>
                      <Card.Text>
                        <p className='petdec'>{truncate(elem.description, 130)}</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })
          }
        </Row>

        <button className='cardBtn' onClick={loadMore} >Meet all our Pets</button>
        {/* {
         hidden ? <button className='cardBtn' onClick={loadMore} >Meet all our Pets</button> : null
        } */}
      </Container>
    </div>
  )
}

export default PetsProfile