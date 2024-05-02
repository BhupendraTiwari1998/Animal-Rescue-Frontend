import React, { useEffect, useState } from 'react'
import BreadCrumbComp from '../common/BreadCrumbComp'
import axios from 'axios';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { IoSearch } from "react-icons/io5";
import { BiHomeAlt2 } from "react-icons/bi";
import image from '../../image/adoption-2.jpg'


import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { truncate } from '../util';
import './style.css'


const Adoption = () => {

  const [adoption, setAdoption] = useState([]);
  const [path, setPath] = useState("");

  useEffect(() => {
    axios.get('http://localhost:3002/get-adoptions')
      .then((res) => {
        // console.log(res.data.data)
        setAdoption(res.data.data)
        setPath(res.data.filepath)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ backgroundColor: '#fbf6f3' }}>

      <div className='adopt'>
        <BreadCrumbComp title='Adoption' crumb='Adopt a Pet' />
        {/* <h1 style={{ fontSize: '50px', color: 'white', marginTop: '320px' }}>Adopt a Pet</h1> */}
      </div>

      <Container fluid>

        <div className='adopt11'>
          <h1>Are you looking for a new companion?</h1><br />
          <p style={{ marginBottom: '50px',width:'39%',margin:'auto' }}>Our available pets list is updated daily. Please read our adoption policies as well as each pet’s profile before applying.</p>
        </div>
        <Row>

          <Col md={3}>
            <div className='looking1'>
              <h5 style={{ paddingBottom: '20px' }}>Search</h5>
              <div style={{ display: 'flex', paddingLeft: '30px' }}>
                <input type="text" name="" id="" placeholder='Search...' />
                <button className='lookbtn'><IoSearch /></button>
                {/* <input type="text" name="" id="" /><span><button className='looking2'><IoIosSearch /></button></span> */}
              </div>

            </div>

            <div className='looking2'>
              <h1 style={{ fontSize: '80px', color: 'white' }}><BiHomeAlt2 /></h1>
              <div className='looking3'>
                <h6 style={{ color: 'white', fontSize: '20px', lineHeight: '1.5' }}>The best way to help us and our precious tails is to donate!</h6>
              </div>

              <button className='lookbtn2'>Donate Now</button>
            </div>

            <div className='looking4'>
              <img src={image} alt="" />
              <div className='looking5'>

                <div className='looking6'>
                  <h2>Planning to Adopt a Pet?</h2>
                  <p style={{ color: 'white', margin: '30px 0' }}>Help make the transition, as smooth as possible.</p>
                  <button className='lookbtn3'>Learn More</button>
                </div>


              </div>
            </div>


          </Col>

          <Col md={9}>
            <Box sx={{ width: '100%',marginTop:'50px', typography: 'body1' }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="All Pets" value="1" />
                    <Tab label="Dogs" value="2" />
                    <Tab label="Cats" value="3" />
                    <Tab label="Other Animals" value="4" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <Row>
                    {
                      adoption &&
                      adoption.map((elem, ind) => {
                        return (
                          <Col md={4} key={ind}>
                            <div>
                              <Card className='adopt1' style={{ width: '98%', marginBottom: '20px', backgroundColor: '#fbf6f3' }}>
                                <Card.Img variant="top" className='adopt2' src={path + '/' + elem.image} />

                                <Card.Body style={{ textAlign: 'left' }}>
                                  <Card.Title><h4 className='adopt3'>{elem.name}</h4></Card.Title>
                                  <Card.Title><h5 className='adopt5'>{elem.breed}</h5></Card.Title>
                                  <Card.Text>
                                    <p className='adopt6' style={{ fontSize: '17px' }}>{truncate(elem.description, 142)}</p>
                                  </Card.Text>
                                </Card.Body>
                              </Card>
                            </div>
                          </Col>
                        )
                      })
                    }
                  </Row>
                </TabPanel>

                <TabPanel value="2">
                  <Row>
                    {adoption &&
                      adoption.filter(elem => elem.category.category_name === "Dogs").map((e, i) => {
                        return (
                          <Col md={4} key={i}>
                            <div>
                              <Card className='adopt1' style={{ width: '98%', marginBottom: '20px', backgroundColor: '#fbf6f3' }}>
                                <Card.Img variant="top" className='adopt2' src={path + '/' + e.image} />
                                <Card.Body style={{ textAlign: 'left' }}>
                                  <Card.Title><h4 className='adopt3'>{e.name}</h4></Card.Title>
                                  <Card.Title><h5 className='adopt5'>{e.breed}</h5></Card.Title>
                                  <Card.Text>
                                    <p className='adopt6' style={{ fontSize: '17px' }}>{truncate(e.description, 134)}</p>
                                  </Card.Text>
                                </Card.Body>
                              </Card>
                            </div>
                          </Col>
                        );
                      })
                    }
                  </Row>
                </TabPanel>

                <TabPanel value="3">
                  <Row>
                    {adoption &&
                      adoption.filter(elem => elem.category.category_name === "Cats").map((e, i) => {
                        return (
                          <Col md={4} key={i}>
                            <div>
                              <Card className='adopt1' style={{ width: '98%', marginBottom: '20px', backgroundColor: '#fbf6f3' }}>
                                <Card.Img variant="top" className='adopt2' src={path + '/' + e.image} />
                                <Card.Body style={{ textAlign: 'left' }}>
                                  <Card.Title><h4 className='adopt3'>{e.name}</h4></Card.Title>
                                  <Card.Title><h5 className='adopt5'>{e.breed}</h5></Card.Title>
                                  <Card.Text>
                                    <p className='adopt6' style={{ fontSize: '17px' }}>{truncate(e.description, 120)}</p>
                                  </Card.Text>
                                </Card.Body>
                              </Card>
                            </div>
                          </Col>
                        );
                      })
                    }
                  </Row>
                </TabPanel>
                <TabPanel value="4">
                  <Row>
                    {adoption &&
                      adoption.filter(elem => elem.category.category_name === "Bunnies").map((e, i) => {
                        return (
                          <Col md={4} key={i}>
                            <div>
                              <Card className='adopt1' style={{ width: '98%', marginBottom: '20px', backgroundColor: '#fbf6f3' }}>
                                <Card.Img variant="top" className='adopt2' src={path + '/' + e.image} />
                                <Card.Body style={{ textAlign: 'left' }}>
                                  <Card.Title><h4 className='adopt3'>{e.name}</h4></Card.Title>
                                  <Card.Title><h5 className='adopt5'>{e.breed}</h5></Card.Title>
                                  <Card.Text>
                                    <p className='adopt6' style={{ fontSize: '17px' }}>{truncate(e.description, 140)}</p>
                                  </Card.Text>
                                </Card.Body>
                              </Card>
                            </div>
                          </Col>
                        );
                      })
                    }
                  </Row>
                </TabPanel>
              </TabContext>
            </Box>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Adoption