import React, { useEffect } from 'react'
import BreadCrumbComp from '../common/BreadCrumbComp'
import './contact.css'
import { Button, Col, Container, Row } from 'react-bootstrap'
import contactImg from '../../image/contacts-2.jpg'
import { Formik } from 'formik';


const ContactUs = () => {

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])

  return (
    <div>
      <div className='contact'>
        <BreadCrumbComp title='Contacts' crumb='Contacts' />
      </div>

      <div className='contact1'>
        <Container>
          <Row style={{ paddingTop: '100px' }}>
            <Col md={6}>
              <div style={{ height: '520px', width: '100%' }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19602.83531856336!2d-0.1341585301375304!3d51.50214608450794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1708508352158!5m2!1sen!2sin" width="600" height="520" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </Col>

            <Col md={6}>
              <div className='contact2'>
                <div style={{ paddingTop: '100px' }}>
                  <h1>Contact Information</h1> <br />
                  <p style={{ fontSize: '17px' }}>Down to earth, thorough instruction in yoga <br /> and mindfulness for the benefit of all bodies.</p>

                </div>

                <Row style={{ paddingTop: '50px' }}>
                  <Col md={6}>
                    <div style={{ paddingLeft: '80px', textAlign: 'left', lineHeight: '.4' }}>
                      <h5>Main Office:</h5>
                      <p style={{ fontSize: '13px', marginTop: '30px' }}>27 NW New Vexmont,</p>
                      <p style={{ fontSize: '13px' }}>Portland, Oregon97209</p>
                      <p style={{ fontSize: '13px', color: '' }}>+(123) 1800-567-8990</p>

                    </div>
                  </Col>

                  <Col md={6}>
                    <div style={{ paddingRight: '50px', lineHeight: '.4' }}>
                      <h5>Opening Hours:</h5>
                      <p style={{ fontSize: '14px', marginTop: '30px' }}>Every day: 9:00 – 22:00</p>
                      <p style={{ fontSize: '14px' }}>Sat – Sun: 8:00 – 21:00</p>

                    </div>
                  </Col>
                </Row>

              </div>

            </Col>
          </Row>
        </Container>

        <Container>
          <Row style={{ margin: '100px 0' }}>
            <Col md={6}>
              <div>
                <img style={{ borderRadius: '6px',width:'100%', height:'600px',objectFit:'cover' }} src={contactImg} alt="" />
              </div>
            </Col>

            <Col md={6}>
              <div className='inquiry p-4' style={{ textAlign: 'left' }}>

                <div>
                  <Button className='inquiry1'>SEND US AN INQUIRY</Button>
                  <h1>Contact Us</h1> <br />
                </div>


                <Formik
                  initialValues={{ name: '', email: '', textarea: '' }}
                  validate={values => {
                    const errors = {};
                    if (!values.name) {
                      errors.name = "Name is required"
                    }
                    if (!values.email) {
                      errors.email = 'Email is Required';
                      <br />
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                      errors.email = 'Invalid email address';
                    }
                    if (!values.textarea) {
                      errors.textarea = 'Textarea is required'
                    }
                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                    }, 400);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <div className="" >

                        <label htmlFor="" style={{fontWeight:'bold'}}>Name *</label><br />
                        <input
                          className='form-control'
                          type="text"
                          name="name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                        />
                        {errors.name && touched.name && errors.name} <br />

                        <label htmlFor="" style={{fontWeight:'bold'}}>E-Mail</label>
                        <input
                          className='form-control'
                          type="email"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                        {errors.email && touched.email && errors.email} <br />



                        <textarea className='form-control mx-auto' name="textarea" type='text' id="" cols="30" onChange={handleChange} onBlur={handleBlur} value={values.textarea} rows="5" >Your Message</textarea> {errors.textarea && touched.textarea && errors.textarea}
                      </div>




                      <Button type="submit" className='mt-5' disabled={isSubmitting}>
                        Submit
                      </Button>
                    </form>
                  )}
                </Formik>

              </div>

            </Col>

          </Row>
        </Container>
      </div>

    </div>
  )
}

export default ContactUs