import { notification } from 'antd';
import axios from 'axios';
import { Formik } from 'formik';
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddShopProduct = () => {

  const navigate = useNavigate();
  const [img1, setimg1] = useState(null);
  const [shopcategories, setShopcategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/get-shopcategories')
      .then((res)=>{
        console.log(res)
        setShopcategories(res.data.data);
      })
      .catch((err)=>{
        console.log(err)
      })
  }, []);

  return (
    <div>
      <h1>Add Adoption Product</h1>

      <Formik
        initialValues={{ shop_cart: '', shop_name: '', short_desc: '', shop_description: '',price:'',shop_categories:'' }}
        validate={values => {
          const errors = {};
          if (!values.shop_cart) {
            errors.shop_cart = 'Name is Required';
          } 
          if (!values.shop_name) {
            errors.shop_name = 'shop_name is Required';
          } 
          if (!values.short_desc) {
            errors.short_desc = 'short_desc is Required';
          } 
          if (!values.shop_description) {
            errors.shop_description = 'shop_description is Required';
          }
          if (!values.price) {
            errors.price = 'price is Required';
          }
          if (!values.shop_categories) {
            errors.shop_categories = 'shop_categories is Required';
          } 
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const formData = new FormData();

          formData.append('shop_cart', values.shop_cart);
          formData.append('shop_name', values.shop_name);
          formData.append('short_desc', values.short_desc);
          formData.append('shop_description', values.shop_description); 
          formData.append('price', values.price); 
          formData.append('shop_categories', values.shop_categories); 
          formData.append('image', img1);

          axios.post('http://localhost:3002/add-shopproduct', formData)
            .then((res) => {
              console.log(res);
              notification.success({message:"Added Successfully"});
              navigate('/shop_product');
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
              name="shop_cart"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.shop_cart}
              className='border border-black'
              placeholder='shop cart'
            />
            {errors.shop_cart && touched.shop_cart && errors.shop_cart} <br /><br />
            <input
              type="text"
              name="shop_name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.shop_name}
              className='border border-black'
              placeholder='shop name'
            />
            {errors.shop_name && touched.shop_name && errors.shop_name} <br /><br />

            <input
              type="text"
              name="short_desc"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.short_desc}
              className='border border-black'
              placeholder='Short desc'
            />
            {errors.short_desc && touched.short_desc && errors.short_desc} <br /><br />

            <input
              type="text"
              name="shop_description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.shop_description}
              className='border border-black'
              placeholder='shop description'
            />
            {errors.shop_description && touched.shop_description && errors.shop_description} <br /><br />

            <input
              type="text"
              name="price"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
              className='border border-black'
              placeholder='price'
            />
            {errors.price && touched.price && errors.price} <br /><br />

            {/* Render a select dropdown for selecting the category */}
            <select
              name="shop_categories"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.shop_categories}
              className='border border-black'
            >
              <option value="">Select a category</option>
              {
                shopcategories &&
                shopcategories.map((elem,ind)=>{
                  return(
                    <option key={ind} value={elem._id}>{elem.shopcategories_name}</option>
                  )
                })
              }
              
            </select>
            {errors.shop_categories && touched.shop_categories && errors.shop_categories} <br /><br />

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

export default AddShopProduct;
