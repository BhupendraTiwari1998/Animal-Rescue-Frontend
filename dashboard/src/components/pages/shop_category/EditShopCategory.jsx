import React, { useEffect, useState } from 'react'
import { Formik } from 'formik';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { notification } from 'antd';

const EditShopCategory = () => {
    const [edit, setEdit] = useState({ shopcategories_name: '', shop_description: '' });
    const { cate_id } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:3002/get-shopping/${cate_id}`)
            .then((res) => {
                const { shopcategories_name, shop_description } = res.data.data;
                setEdit({ shopcategories_name, shop_description });
            })
            .catch((err) => {
                console.log(err)
            })
    }, [cate_id])

    const handleSubmit = (values, { setSubmitting }) => {
        axios.put(`http://localhost:3002/update-shopcategories/${cate_id}`, values)
            .then((res) => {
                console.log(res);
                notification.success({message:"category Updated successfully"})
                navigate("/shop_category")
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
            <h1 style={{ margin: "50px 0" }}>Edit Shop Category Page</h1>
            <Formik
                initialValues={{ shopcategories_name: edit.shopcategories_name || " ", shop_description: edit.shop_description ||'' }}
                enableReinitialize={true}
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

export default EditShopCategory