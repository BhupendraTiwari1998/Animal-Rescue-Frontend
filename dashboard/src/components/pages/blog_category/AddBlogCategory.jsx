import { notification } from 'antd';
import axios from 'axios';
import { Formik } from 'formik';
import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddBlogCategory = () => {

  const navigate = useNavigate();

  return (
    <div>
      <h1>Add Blog Category Page</h1>

      <Formik
        initialValues={{ blogcategory_name: '', blog_description: '' }}
        validate={values => {
          const errors = {};
          if (!values.blogcategory_name) {
            errors.blogcategory_name = 'Blogcategory_name Required';
          }
          if (!values.blog_description) {
            errors.blog_description = 'Blog_description Required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          axios.post('http://localhost:3002/add-blogcategory', values)
            .then((res) => {
              console.log(res)
              notification.success({message:"Category Added Successfully"})
              navigate("/blog_category")
              setSubmitting(false)
            })
            .catch((err) => {
              console.log(err)
              notification.success({message:'category not added'})
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
          <form onSubmit={handleSubmit}>
            <label htmlFor="">Name</label><br />
            <input
              type="text"
              name="blogcategory_name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.blogcategory_name}
              placeholder='blogcategory_name'
              className='border border-black'
            />
            {errors.blogcategory_name && touched.blogcategory_name && errors.blogcategory_name} <br /><br />
            <label htmlFor="">Description</label><br />
            <input
              type="text"
              name="blog_description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.blog_description}
              placeholder='blog_description'
              className='border border-black'
            />
            {errors.blog_description && touched.blog_description && errors.blog_description}<br /><br />
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default AddBlogCategory