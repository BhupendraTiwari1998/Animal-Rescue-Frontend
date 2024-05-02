import axios from 'axios';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { notification } from 'antd'
import { Button } from 'react-bootstrap';

const EditAbout = () => {
  const [about1, setAbout1] = useState({})
  const { about_id } = useParams()
  const navigate = useNavigate()
  const [img1, setimg1] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3002/get-about/${about_id}`)
      .then((res) => {
        setAbout1(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [about_id])
  return (
    <div>
      <h1>Edit About</h1>

      <Formik

        initialValues={{ name: about1.name || " ", description: about1.description || '' }}
        enableReinitialize={true}
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Name is Required';
          }
          if (!values.description) {
            errors.description = 'Description is Required';
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {

          const formData = new FormData();

          formData.append('name', values.name);
          formData.append('breed', values.description);
          formData.append('image', img1);

          axios.put(`http://localhost:3002/update-about/${about_id}`, formData)
            .then((res) => {
              console.log(res)
              navigate("/aboutus")
              setSubmitting(false);
              notification.success({ message: "Updated successfully" })

            })
            .catch((err) => {
              console.log(err)
              notification.success({ message: "not Updated" })
              setSubmitting(false);
            })
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
          <form onSubmit={handleSubmit} style={{ textAlign: 'left', marginLeft: '500px' }}>
            <label htmlFor="">Name</label><br />
            <input
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              placeholder='Name'
              className='border border-black'
            />
            {errors.name && touched.name && errors.name} <br /><br />
            <label htmlFor="">Description</label><br />
            <input
              type="text"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
              placeholder='Description'
              className='border border-black'
            />
            {errors.description && touched.description && errors.description} <br /><br />

            <input
              type="file"
              name="image"
              onChange={(e) => setimg1(e.target.files[0])}
            />
            {errors.image && touched.image && errors.image} <br /><br />

            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default EditAbout