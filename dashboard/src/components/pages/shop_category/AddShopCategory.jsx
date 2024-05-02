import React from 'react'
import { Formik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import {notification} from 'antd'

const AddShopCategory = () => {
    const navigate = useNavigate()
    return (
        <div className='bordered'>
            <h1 style={{ margin: "50px 0" }}>Add Shop Category Page</h1>
            <Formik
                initialValues={{ shopcategories_name: '', shop_description: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.shopcategories_name) {
                        errors.shopcategories_name = "Category name is required"
                    }

                    if (!values.shop_description) {
                        errors.shop_description = "description is required"
                    }


                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    axios.post("http://localhost:3002/add-shopcategories", values)
                        .then((res) => {
                            console.log(res);
                            notification.success({message:"category added successfully"})
                            navigate("/shop_category")
                            setSubmitting(false);

                        })
                        .catch((err) => {
                            console.log(err);
                            notification.success({message:"category not added"})
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
                        <input
                            type="text"
                            name="shopcategories_name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.shopcategories_name}
                            placeholder='shopcategories_name'
                            className='border border-black'
                        />
                        {errors.shopcategories_name && touched.shopcategories_name && errors.shopcategories_name}
                        <br /><br />
                        <input
                            type="text"
                            name="shop_description"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.shop_description}
                            placeholder='shop_description'
                            className='border border-black'
                        />
                        {errors.shop_description && touched.shop_description && errors.shop_description}
                        <br /><br />
                        <Button type="submit" disabled={isSubmitting}>
                            Submit
                        </Button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default AddShopCategory