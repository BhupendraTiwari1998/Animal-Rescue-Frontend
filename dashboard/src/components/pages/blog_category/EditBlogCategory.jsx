import React, { useEffect, useState } from 'react'
import { Formik } from 'formik';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { notification } from 'antd';

const EditBlogCategory = () => {
    const [edit, setEdit] = useState({ blogcategory_name: '', blog_description: '' });
    const { blog_id } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:3002/get-blogcategory/${blog_id}`)
            .then((res) => {
                const { blogcategory_name, blog_description } = res.data.data;
                setEdit({ blogcategory_name, blog_description });
            })
            .catch((err) => {
                console.log(err)
            })
    }, [blog_id])

    const handleSubmit = (values, { setSubmitting }) => {
        axios.put(`http://localhost:3002/update-blogcategory/${blog_id}`, values)
            .then((res) => {
                console.log(res);
                notification.success({message:"category Updated successfully"})
                navigate("/blog_category")
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
                initialValues={{ blogcategory_name: edit.blogcategory_name || " ", blog_description: edit.blog_description ||'' }}
                enableReinitialize={true}
                validate={values => {
                    const errors = {};
                    if (!values.blogcategory_name) {
                        errors.blogcategory_name = "Category name is required"
                    }

                    if (!values.blog_description) {
                        errors.blog_description = "blog_description is required"
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
                            name="blogcategory_name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.blogcategory_name}
                            className='border border-black'
                            placeholder='blogcategory_name'
                        />
                        {errors.blogcategory_name && touched.blogcategory_name && errors.blogcategory_name}
                        <br /><br />
                        <input
                            type="text"
                            name="blog_description"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.blog_description}
                            placeholder='blog_description'
                            className='border border-black'
                          
                        />
                        {errors.blog_description && touched.blog_description && errors.blog_description}
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

export default EditBlogCategory