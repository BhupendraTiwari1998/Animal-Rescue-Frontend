import { notification } from 'antd';
import axios from 'axios';
import { Formik } from 'formik';
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddBlogProduct = () => {

  const navigate = useNavigate();
  const [img1, setimg1] = useState(null);
  const [blogcategories, setBlogcategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/get-blogcategories')
      .then((res)=>{
        console.log(res)
        setBlogcategories(res.data.data);
      })
      .catch((err)=>{
        console.log(err)
      })
  }, []);

  return (
    <div>
      <h1>Add Adoption Product</h1>

      <Formik
        initialValues={{ blogproduct_name: '', blogshort_description: '', blogdescription: '', blog_categories: '',master:'' }}
        validate={values => {
          const errors = {};
          if (!values.blogproduct_name) {
            errors.blogproduct_name = 'Name is Required';
          } 
          if (!values.blogshort_description) {
            errors.blogshort_description = 'Short Description is Required';
          } 
          if (!values.blogdescription) {
            errors.blogdescription = 'Description is Required';
          } 
          if (!values.master) {
            errors.master = 'master is Required';
          }
          if (!values.blog_categories) {
            errors.blog_categories = 'Categories is Required';
          } 
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const formData = new FormData();

          formData.append('blogproduct_name', values.blogproduct_name);
          formData.append('blogshort_description', values.blogshort_description);
          formData.append('blogdescription', values.blogdescription);
          formData.append('master', values.master); 
          formData.append('blog_categories', values.blog_categories); 
          formData.append('image', img1);

          axios.post('http://localhost:3002/add-blogproduct', formData)
            .then((res) => {
              console.log(res);
              notification.success({message:"Added Successfully"});
              navigate('/blog_product');
              setSubmitting(false);
            })
            .catch((err) => {
              console.log(err);
              notification.success({message:"Not Added"});
            });
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
            <input
              type="text"
              name="blogproduct_name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.blogproduct_name}
              placeholder='Blog Product name'
              className='border border-black'
            />
            {errors.blogproduct_name && touched.blogproduct_name && errors.blogproduct_name} <br /><br />
            <input
              type="text"
              name="blogshort_description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.blogshort_description}
              className='border border-black'
              placeholder='blogshort_description'
            />
            {errors.blogshort_description && touched.blogshort_description && errors.blogshort_description} <br /><br />

            <input
              type="text"
              name="blogdescription"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.blogdescription}
              className='border border-black'
              placeholder='Blogdescription'
            />
            {errors.blogdescription && touched.blogdescription && errors.blogdescription} <br /><br />

            <input
              type="text"
              name="master"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.master}
              className='border border-black'
              placeholder='Master'
            />
            {errors.master && touched.master && errors.master} <br /><br />

            {/* Render a select dropdown for selecting the category */}
            <select
              name="blog_categories"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.blog_categories}
              className='border border-black'
            >
              <option value="">Select a category</option>
              {
                blogcategories &&
                blogcategories.map((elem,ind)=>{
                  return(
                    <option key={ind} value={elem._id}>{elem.blogcategory_name}</option>
                  )
                })
              }
              
            </select>
            {errors.blog_categories && touched.blog_categories && errors.blog_categories} <br /><br />

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
  );
};

export default AddBlogProduct;
