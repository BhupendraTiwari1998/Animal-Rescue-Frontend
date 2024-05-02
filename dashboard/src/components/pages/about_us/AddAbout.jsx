import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import axios from 'axios'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { notification } from 'antd'

const AddAbout = () => {

  const navigate = useNavigate()
  const [img,setImg] = useState (null)

  return (
    <div>
      <h1>Add About us</h1><br /><br />

      <Formik
        initialValues={{ name: '', description: '' }}
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

          formData.append('name',values.name)
          formData.append('description',values.description)
          formData.append('image',img)
          axios.post('http://localhost:3002/add-about', formData)
            .then((res) => {
              console.log(res)
              navigate('/aboutus')
              setSubmitting(false)
              notification.success({message:"Successfully Added"})
            })
            .catch((err) => {
              console.log(err)
              notification.success({message:"Product not add"})
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
          <form onSubmit={handleSubmit} style={{textAlign:'left',marginLeft:'500px'}}>
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
            {errors.name && touched.name && errors.name}<br /><br />
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
            {errors.description && touched.description && errors.description}<br /><br />
            <input
              type="file"
              name="image"
              onChange={(e)=>setImg(e.target.files[0])}
              
            />
            {errors.image && touched.image && errors.image}<br /><br />
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </form>
        )}
      </Formik>


    </div>
  )
}

export default AddAbout