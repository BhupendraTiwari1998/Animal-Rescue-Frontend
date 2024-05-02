import { notification } from 'antd';
import axios from 'axios';
import { Formik } from 'formik';
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddAdoption = () => {

  const navigate = useNavigate();
  const [img1, setimg1] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/get-categories')
      .then((res) => {
        console.log(res)
        setCategories(res.data.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);

  return (
    <div>
      <h1>Add Adoption Product</h1>

      <Formik
        initialValues={{ name: '', breed: '', description: '', category: '' }}
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Name is Required';
          }
          if (!values.breed) {
            errors.breed = 'Breed is Required';
          }
          if (!values.description) {
            errors.description = 'Description is Required';
          }
          if (!values.category) {
            errors.category = 'Category is Required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const formData = new FormData();

          formData.append('name', values.name);
          formData.append('breed', values.breed);
          formData.append('description', values.description);
          formData.append('category', values.category); // This should be the _id of the selected category
          formData.append('image', img1);

          axios.post('http://localhost:3002/add-adoption', formData)
            .then((res) => {
              console.log(res);
              notification.success({ message: "Added Successfully" });
              navigate('/adoption');
              setSubmitting(false);
            })
            .catch((err) => {
              console.log(err);
              notification.success({ message: "Not Added" });
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
              className='border border-black'
              placeholder='name'
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && errors.name} <br /><br />
            <input
              type="text"
              name="breed"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.breed}
              placeholder='breed'
              className='border border-black'
            />
            {errors.breed && touched.breed && errors.breed} <br /><br />

            <input
              type="text"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
              placeholder='description'
              className='border border-black'
            />
            {errors.description && touched.description && errors.description} <br /><br />

            {/* Render a select dropdown for selecting the category */}
            <select
              name="category"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.category}
              className='border border-black'
            >
              <option value="">Select a category</option>
              {
                categories &&
                categories.map((category, ind) => {
                  return (
                    <option key={category._id} value={category._id}>{category.category_name}</option>
                  )
                })
              }

            </select>
            {errors.category && touched.category && errors.category} <br /><br />

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

export default AddAdoption;
