import React from 'react'
import { Formik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import {notification } from 'antd';

const Add_Adoption = () => {
    const navigate = useNavigate()
    return (
        <div className='bordered'>
            <h1 style={{margin:"50px 0"}}>Add Adoption Category Page</h1>
            <Formik
                initialValues={{ category_name: '', description: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.category_name) {
                        errors.category_name = "Category name is required"
                    }

                    if (!values.description) {
                        errors.description = "description is required"
                    }


                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    axios.post("http://localhost:3002/add-category", values)
                        .then((res) => {
                            console.log(res);
                            notification.success({message:"category added successfully"})
                            navigate("/adoption_category")
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
                            name="category_name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.category_name}
                            placeholder='category_name'
                            className='border border-black'
                        />
                        {errors.category_name && touched.category_name && errors.category_name}
                        <br /><br />
                        <input
                            type="text"
                            name="description"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                            placeholder='description'
                            className='border border-black'
                        />
                        {errors.description && touched.description && errors.description}
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

export default Add_Adoption