import axios from 'axios';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {notification} from 'antd'
import { Button } from 'react-bootstrap';

const EditBlogproduct = () => {
  const [editBlog, setEditBlog] = useState({});
  const [categoryName, setCategoryName] = useState('');
  const { blogedit_id } = useParams();
  const navigate = useNavigate();
  const [img1, setimg1] = useState(null);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/get-blogcategories')
      .then((res) => {
        console.log(res)
        setCategories(res.data.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3002/get-singleblog/${blogedit_id}`)
      .then((res) => {
        setEditBlog(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [blogedit_id]);

  useEffect(() => {
    if (editBlog.blog_categories) {
      axios.get(`http://localhost:3002/get-blogcategory/${editBlog.blog_categories}`)
        .then((response) => {
          setCategoryName(response.data.data.blogcategory_name);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [editBlog.blog_categories]);

  return (
    <div>
      <h1>Edit About</h1>

      <Formik
        initialValues={{
          blogproduct_name: editBlog.blogproduct_name || "",
          blogshort_description: editBlog.blogshort_description || "",
          blogdescription: editBlog.blogdescription || '',
          master: editBlog.master || '',
          blog_categories: categoryName || ''
        }}
        enableReinitialize={true}
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
            errors.blog_categories = 'Category is Required';
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

          axios.put(`http://localhost:3002/update-blogproduct/${blogedit_id}`, formData)
            .then((res) => {
              console.log(res);
              notification.success({message:"Updated successfully"})
              navigate("/blog_product");
              setSubmitting(false);

            })
            .catch((err) => {
              console.log(err);
              notification.success({message:"not Updated"});
              setSubmitting(false);
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
        }) => (
          <form onSubmit={handleSubmit} style={{ textAlign: 'left', marginLeft: '500px' }}>
            <input
              placeholder='Blog Product name'
              type="text"
              name="blogproduct_name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.blogproduct_name}
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

            <select
              name="blog_categories"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.blog_categories}
              className='border border-black'
            >
              <option value="">Select a blog_categories</option>
              {
                categories &&
                categories.map((elem, ind) => {
                  return (
                    <option key={elem._id} value={elem._id}>{elem.blogcategory_name}</option>
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
  )
}

export default EditBlogproduct;
