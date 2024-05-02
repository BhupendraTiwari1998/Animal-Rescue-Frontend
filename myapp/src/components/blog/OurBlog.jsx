import React, { useEffect, useState } from 'react'
import BreadCrumbComp from '../common/BreadCrumbComp'
import './blog.css'
import axios from 'axios'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const OurBlog = () => {

  const [blog, setBlog] = useState([]);
  const [path, setPath] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:3002/get-blogproduct')
      .then((res) => {
        // console.log(res.data.data)
        setBlog(res.data.data)
        setPath(res.data.filepath)
      })
      .then((err) => {
        console.log(err)
      })
  }, [])

  const clickHand=(id)=>{
    // console.log("id",id)
    navigate(`/single_blog/${id}`)
  }

  return (
    <div>
      <div className='ourblog'>
        <BreadCrumbComp title='Our Blog' crumb='Our Blog' />
      </div>

      <div className='ourblog1'>
        <Container>
          <Row style={{ paddingTop: '100px' }}>
            {
              blog &&
              blog.slice(0, 6).map((elem, ind) => {
                return (
                  <Col md={4} key={ind} onClick={()=>clickHand(elem._id)}>
                    <Card style={{ width: '98%', textAlign: 'left', height: '400px', margin: '20px 0', border: 'none', backgroundColor: 'transparent' }}>
                      <Card.Img variant="top" style={{ borderRadius: '7px', height: '250px' }} src={path + '/' + elem.image} />
                      <Card.Body style={{ paddingLeft: '0' }}>
                        <Card.Title><button className='blogbtn1'>{elem.blogproduct_name}</button></Card.Title>
                        <Card.Text>
                          <h5>{elem.blogshort_description}</h5>
                          <a href="" style={{ textDecoration: 'none', color: 'rgb(113,38,57)' }}>{elem.master}</a>
                        </Card.Text>
                      </Card.Body>
                    </Card>
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

export default OurBlog