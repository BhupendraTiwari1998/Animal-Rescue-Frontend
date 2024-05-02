import React from "react";
import { Formik } from "formik";
import { SiGnuprivacyguard } from "react-icons/si";
import { Button } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {notification} from 'antd'

const SignIn = () => {
  const navigate = useNavigate()
  return (
    <div className="h-screen flex justify-center items-center bg-green-200">
      <div className="w-[600px] p-4">
        <div className="login_icon">
          <SiGnuprivacyguard className="text-3xl" />
        </div>
        <h2 className="my-3">SIGN IN</h2>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = " Email is required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "Password is required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            axios.post(`http://localhost:3002/adminsign-in`, values)
              .then((res) => {
                console.log(res)
                setSubmitting(false)
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("admin", JSON.stringify(res.data.data))

                if(res.data.token){
                  notification.success({message:"Login Successfully"})
                navigate("/")
                }
                else{
                  // alert("Admin does not exist")
                  localStorage.clear("")
                }

              })
              .catch((err) => {
                console.log(err)
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
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className="form-control border-2 border-sky-600"
                placeholder="Email"
              />
              {errors.email && touched.email && errors.email}
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className="form-control border-2 border-sky-600 my-3"
                placeholder="Password"
              />
              {errors.password && touched.password && errors.password}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="form-control"
              >
                Submit
              </Button>
              <Link to="/sign-up">
                Don't have an account? Sign Up</Link>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignIn;
