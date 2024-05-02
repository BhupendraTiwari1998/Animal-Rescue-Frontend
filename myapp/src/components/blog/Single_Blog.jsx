import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { truncate } from '../util';
import singleImg1 from '../../image/single_blog-1.jpg'
import singleImg2 from '../../image/single_blog-2.jpg'
import singleImg3 from '../../image/single_blog-3.jpg'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";




const Single_Blog = () => {

  const [blogOne, setBlogOne] = useState({});
  const { id_blog } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3002/get-singleblog/${id_blog}`)
      .then((res) => {
        setBlogOne(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id_blog]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <div><img src={`http://localhost:3002/uploads/blogImage/${blogOne.image}`} alt="image error" style={{ width: '100%', height: '100vh', objectFit: 'cover' }} /></div>
      <div className='wellness'>
        <div style={{ height: '280px', width: '80%', marginTop: '80px' }}>
          <Button className='wellnessBtn'>{blogOne.blogproduct_name}</Button>
          <h1 style={{ fontSize: '46px', margin: '15px 0 30px 0' }}>{blogOne.blogshort_description}</h1>
          <p style={{ fontSize: '20px', color: '#716668' }}>{blogOne.blogdescription ? truncate(blogOne.blogdescription, 200) : ""}</p>

          <p>{blogOne.master}</p>
        </div>
      </div>

      <div style={{ minHeight: '3000px', width: '100%', backgroundColor: 'rgb(250,247,243)', paddingTop: '100px' }}>
        <Container>
          <Row>
            <Col md={4}>
              <div>
                <Card style={{ width: '100%', border: '1px solid rgb(215,206,201)', padding: '20px', backgroundColor: 'transparent' }}>
                  <h5 style={{ padding: '0 0 20px 0' }}>Meet the author</h5>
                  <Card.Img variant="top" style={{ borderRadius: '3%' }} src={singleImg1} />
                  <Card.Body>
                    <Card.Title style={{ fontSize: '15px' }}>Andy Grow</Card.Title>
                    <Card.Text style={{ color: '#716668' }}>
                      For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.
                    </Card.Text>
                    <Button className='wellnessBtn2'>Open Profile</Button>
                  </Card.Body>
                </Card>
              </div>

              <div style={{ height: '180px', width: '100%', marginTop: '50px', border: '1px solid rgb(215,206,201)', borderRadius: '6px' }}>
                <h5 style={{ margin: '20px 0' }}>Share the post</h5>

                <div className='well_icon'>
                  <p><a href=""></a><FaFacebookF /></p>
                  <p><a href=""></a><FaTwitter /></p>
                  <p><a href=""></a><FaLinkedinIn /></p>
                  <p><a href=""></a><MdOutlineMail /></p>
                </div>
              </div>
            </Col>

            <Col md={8}>
              <div style={{ textAlign: 'left', marginLeft: '30px' }}>
                <p style={{ color: '#716769' }}>
                  The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental.
                </p>

                <div style={{ borderLeft: '4px solid', height: '240px', marginTop: '50px' }}>
                  <p style={{ fontWeight: 'bold', lineHeight: '1.3', padding: '50px 0 0 40px' }} >
                    In the news cycle, Hurricane Ian may be over, but for the communities affected, the disaster has not ended. We’re on the ground in Charlotte County, Florida, providing whatever help and resources we can to families with pets, from veterinary care to pet supplies, as residents struggle to reassemble their lives amid the rubble.
                    <br /><br />
                    John Collins
                  </p>
                </div>

                <div >
                  <h3 style={{ margin: '60px 0' }}>Animals Reunited with their Families</h3>
                  <p style={{ color: '#716769' }}>
                    The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.
                  </p>
                </div>

                <div>
                  <h3 style={{ margin: '50px 0' }}>Animals Should be the Next Help</h3>
                  <h5 style={{ margin: '0 0 40px 0' }}>1. Step 1</h5>
                  <p style={{ color: '#716769' }}>
                    To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.
                  </p>

                  <h5 style={{ margin: '50px 0' }}>2. Step 2</h5>
                  <p style={{ color: '#716769' }}>
                    If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.
                  </p>
                </div>

                <div><img src={singleImg2} style={{ height: '400px', objectFit: 'cover', borderRadius: '7px' }} alt="" /></div>

                <p style={{ color: '#716769', margin: '50px 0' }}>
                  To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.
                </p>

                <div>
                  <h3 style={{ margin: '50px 0' }}>Distribution Center for Animals</h3>
                  <h5 style={{ margin: '0 0 40px 0' }}>1. Santa Gifts for Animals</h5>
                  <p style={{ color: '#716769' }}>
                    To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. Their separate existence is a myth.
                  </p>

                  <h5 style={{ margin: '50px 0' }}>2. Christmas Tree for Animals</h5>
                  <p style={{ color: '#716769' }}>
                    Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce.
                  </p>
                </div>

                <Row style={{ marginTop: '50px' }}>
                  <Col md={8}>
                    <div>
                      <h2>We are Honored to Help Animals and People</h2>
                      <p style={{ marginTop: '50px', color: '#716769' }}>
                        Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple. If several languages coalesce, the grammar of the resulting language is more simple. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.
                      </p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div><img src={singleImg3} style={{ height: '400px', objectFit: 'cover', borderRadius: '6px' }} alt="" /></div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>




    </div>
  );
}

export default Single_Blog;
