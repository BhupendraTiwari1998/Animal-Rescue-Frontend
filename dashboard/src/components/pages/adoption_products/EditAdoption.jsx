import axios from 'axios';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {notification} from 'antd'
import { Button } from 'react-bootstrap';

const EditAdoption = () => {
  const [adopt1, setAdopt1] = useState({});
  const [categoryName, setCategoryName] = useState('');
  const { adoption_id } = useParams();
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

  useEffect(() => {
    axios.get(`http://localhost:3002/get-adoption/${adoption_id}`)
      .then((res) => {
        setAdopt1(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [adoption_id]);

  useEffect(() => {
    if (adopt1.category) {
      axios.get(`http://localhost:3002/get-category/${adopt1.category}`)
        .then((response) => {
          setCategoryName(response.data.data.category_name);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [adopt1.category]);

  return (
    <div>
      <h1>Edit About</h1>

      <Formik
        initialValues={{
          name: adopt1.name || "",
          breed: adopt1.breed || "",
          description: adopt1.description || '',
          category: categoryName || ''
        }}
        enableReinitialize={true}
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
          formData.append('category', values.category);
          formData.append('image', img1);

          axios.put(`http://localhost:3002/update-pets/${adoption_id}`, formData)
            .then((res) => {
              console.log(res);
              notification.success({message:"Updated successfully"})
              navigate("/adoption");
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
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              placeholder='name'
              className='border border-black'
            />
            {errors.name && touched.name && errors.name} <br /><br />
            <input
              type="text"
              name="breed"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.breed}
              placeholder='name'
              className='border border-black'
            />
            {errors.breed && touched.breed && errors.breed} <br /><br />

            <input
              type="text"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
              placeholder='name'
              className='border border-black'
            />
            {errors.description && touched.description && errors.description} <br /><br />

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
  )
}

export default EditAdoption;
