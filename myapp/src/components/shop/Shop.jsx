import React, { useEffect, useState } from 'react'
import BreadCrumbComp from '../common/BreadCrumbComp'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'
import './shop.css'
import { useNavigate } from 'react-router-dom'

const Shop = () => {
  const [shop, setShop] = useState([]);
  const [path, setPath] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:3002/get-shopproduct')
      .then((res) => {
        // console.log("hello",res.data)
        setShop(res.data.data)
        setPath(res.data.filepath)
      })
      .then((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  const onclickHandeler = (id) => {
    // console.log("id", id)
    navigate(`/single_shopping/${id}`)

  }
  return (
    <div>
      <div className='shop'>
        <BreadCrumbComp title='Shop' crumb='Adoption' />
      </div>

      <div style={{ minhHeight: '1200px', width:'100%', backgroundColor: 'rgb(250,246,242)', paddingTop: '80px'}}>

        <Container>
          <p style={{ textAlign: 'left', paddingBottom: '40px' }}>Showing all 6 results</p>
          <Row>
            {
              shop &&
              shop.map((elem, ind) => {
                // console.log("shop",elem)
                return (
                  <Col md={4} key={ind} onClick={() => onclickHandeler(elem._id)}>
                    <div>
                      <Card className='shopcard' style={{ width: '100%', marginBottom: '25px', textAlign: 'left', padding: '20px' }}>
                        <Card.Img variant="top" style={{ padding: '10px' }} src={path + '/' + elem.image} />
                        <Card.Body>
                          <Card.Title><Button className='shopbtn1'> {elem.shop_cart}</Button></Card.Title>
                          <Card.Title><h5>{elem.short_desc}</h5></Card.Title>
                          <Card.Text>
                            <h6 style={{ fontSize: '14px', paddingTop: '20px' }}>{elem.shop_categories.shopcategories_name}<span style={{ paddingLeft: '150px' }}>{elem.price}</span></h6>

                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>
                )
              })
            }
          </Row>
        </Container>

      </div>

    </div>
  )
}

export default Shop