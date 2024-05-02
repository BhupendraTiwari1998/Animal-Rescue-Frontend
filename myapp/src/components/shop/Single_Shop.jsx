import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa6";
import './shop.css'


const Single_Shop = () => {

    const [single, setSingle] = useState({});
    const { singleshop_id } = useParams();
    const [cart, setCart] = useState(1);

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


    // console.log("params", singleshop_id)

    useEffect(() => {
        axios.get(`http://localhost:3002/get-shop/${singleshop_id}`)
            .then((res) => {
                // console.log("single",res.data)
                setSingle(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [singleshop_id])

    // console.log("abc",single)

    const onchangeHand = (e) => {
        console.log("change", e.target.value)
        setCart(e.target.value)
    }

    const onclickhand = () => {
        // console.log("amount",amt)
        setCart(cart + 1)
    }


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const onclickHandeler = (id) => {
        // console.log("id", id)
        navigate(`/single_shopping/${id}`)
    
      }

    return (
        <div>
            <Container>
                <Row style={{ minHeight: '600px', marginTop: '180px' }}>
                    <Col md={6}>
                        <div className='singleImg'>
                            <img src={`http://localhost:3002/uploads/shopImage/${single.image}`} alt="" />
                        </div>


                    </Col>

                    <Col md={6}>
                        <div style={{ textAlign: 'left' }}>
                            <p style={{ display: 'flex', justifyContent: 'space-between', fontSize: '20px' }}>
                                <p>{single.shop_name}</p>
                                <span style={{ color: 'rgb(246, 185, 71)' }}>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </span>
                            </p>
                            <h1 style={{ margin: '0 0 40px 0' }}>{single.short_desc}</h1>
                            <p style={{ fontSize: '21px', color: "#716769", paddingBottom: '100px' }}>{single.shop_description}</p>
                            <p style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p style={{ fontSize: '18px', color: "#716769", margin: '0 100px 0 0' }}>{single.price}</p>

                                <p>
                                    <input style={{ height: '55px', width: '90px' }} type="number" name="" id="" value={cart} onChange={onchangeHand} />

                                    <Button onClick={onclickhand} className='shop_btn12'>Add to Cart</Button>
                                </p>

                            </p>
                        </div>

                    </Col>
                </Row>
            </Container>


            <div style={{ backgroundColor: 'rgb(251,246,243)' }}>
                <Container>
                    <p style={{ color: '#716769',paddingTop:'80px' }}>
                        <h5>Description</h5><br /><br />
                        The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth.
                    </p><br /><br />

                    <div>
                        <Row>
                            {
                                shop &&
                                shop.slice(3,6).map((elem, ind) => {
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
                    </div>
                </Container>
            </div>

        </div>
    )
}

export default Single_Shop