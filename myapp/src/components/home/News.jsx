import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import newsimg1 from './images/news-1.jpg'
import newsimg2 from './images/news-2.jpg'
import newsimg3 from './images/news-3.jpg'
import { truncate } from '../util';
import sponsors2 from './images/sponsors-2.jpg'
import sponsors3 from './images/sponsors-3.jpg'
import sponsors4 from './images/sponsors-4.jpg'
import sponsors5 from './images/sponsors-5.jpg'
import sponsors6 from './images/sponsors-6.jpg'
import { useNavigate } from 'react-router-dom';

const News = () => {

    const [news, setNews] = useState([]);
    const [path, setPath] = useState("");
    const [visibleData, setVisibleData] = useState(2)

    const navigate = useNavigate()

    const loadMore = () => {
        const newData = visibleData + 2
        setVisibleData(Math.min(newData ,news.length))
    }

    const hidden = visibleData < news.length

    useEffect(() => {
        axios.get('http://localhost:3002/get-blogproduct')
            .then((res) => {
                // console.log(res)
                setNews(res.data.data)
                setPath(res.data.filepath)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const onclickHand = (id) => {
        navigate(`/single_blog/${id}`)

    }

    return (
        <div style={{ minHeight: '1000px', width: '100%', backgroundColor: 'rgb(251,247,242)', paddingTop: '120px',}}>

            <Container>
                <h1 className='happy' style={{ paddingBottom: '50px', marginLeft: '-180px' }}>News and Happenings</h1>
                <Row>
                    <Col md={4}>
                        {
                            news &&
                            news.slice(0, visibleData).map((elem, ind) => {
                                return (
                                    <div className='newsimg' onClick={() => onclickHand(elem._id)}>
                                        <Card style={{ width: '100%', borderRadius: '0px' }}>
                                            <Card.Img variant="top" className='newsimg1' src={path + '/' + elem.image} />

                                        </Card>
                                    </div>

                                )
                            })

                        }
                    </Col>

                    <Col md={6}>
                        {
                            news &&
                            news.slice(0, visibleData).map((elem, ind) => {
                                return (
                                    <div style={{ marginBottom: '20px' }} onClick={() => onclickHand(elem._id)}>
                                        <Card style={{ width: '70%', textAlign: 'left', border: 'none', backgroundColor: 'transparent' }}>
                                            <Card.Body>
                                                <Card.Title><button className='newsbtn1'>{elem.blogproduct_name}</button></Card.Title>
                                                <Card.Title>
                                                    <a href="" style={{ textDecoration: 'none', color: 'rgb(113,38,57)' }}><h3 className='title1'>{elem.blogshort_description}</h3></a>
                                                </Card.Title>

                                                <Card.Text>
                                                    <p style={{ fontSize: '15px', marginTop: '30px', color: '#716769' }}>{truncate(elem.blogdescription, 260)}</p>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                            })

                        }
                    </Col>

                    <Col md={2}>
                        <div>
                            <img style={{ paddingBottom: '50px', objectFit: 'cover' }} src={newsimg1} alt="" />
                            <img style={{ paddingBottom: '50px', objectFit: 'cover' }} src={newsimg2} alt="" />
                            <img style={{ paddingBottom: '20px', objectFit: 'cover' }} src={newsimg3} alt="" />
                        </div>
                    </Col>

                </Row>

                {
                    hidden ?<Button onClick={loadMore} className='newsbtn'>All news and happenings</Button> : null
                }

                <hr />

                <Row style={{ minHeight: '400px', paddingTop: '60px', textAlign: 'center' }}>
                    <h2>Our Sponsors</h2>
                    <Col md={2}><div><img src={sponsors5} alt="" /></div></Col>
                    <Col md={2}><div><img src={sponsors2} alt="" /></div></Col>
                    <Col md={2}><div><img src={sponsors3} alt="" /></div></Col>
                    <Col md={2}><div><img src={sponsors6} alt="" /></div></Col>
                    <Col md={2}><div><img src={sponsors4} alt="" /></div></Col>
                    <Col md={2}><div><img src={sponsors2} alt="" /></div></Col>

                </Row>
            </Container>
        </div>
    )
}

export default News