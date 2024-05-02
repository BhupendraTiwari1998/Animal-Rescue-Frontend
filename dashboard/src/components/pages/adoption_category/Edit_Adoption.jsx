import React, { useEffect, useState } from 'react'
import { Formik } from 'formik';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { notification } from 'antd';

const Edit_Adoption = () => {
    const [edit, setEdit] = useState({ category_name: '', description: '' });
    const { category_id } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:3002/get-category/${category_id}`)
            .then((res) => {
                const { category_name, description } = res.data.data;
                setEdit({ category_name, description });
            })
            .catch((err) => {
                console.log(err)
            })
    }, [category_id])

    const handleSubmit = (values, { setSubmitting }) => {
        axios.put(`http://localhost:3002/update-category/${category_id}`, values)
            .then((res) => {
                console.log(res);
                notification.success({message:"category Updated successfully"})
                navigate("/adoption_category")
                setSubmitting(false);

            })
            .catch((err) => {
                console.log(err);
                notification.success({message:"category not Updated"})
                setSubmitting(false);
            })
    }


    return (
        <div className='bordered'>
            <h1 style={{ margin: "50px 0" }}>Edit Adoption Category Page</h1>
            <Formik
                initialValues={{ category_name: edit.category_name || " ", description: edit.description ||'' }}
                enableReinitialize={true}
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

                onSubmit={handleSubmit}

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
                            className='border border-black'
                            placeholder='description'
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

export default Edit_Adoption