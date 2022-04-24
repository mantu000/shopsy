import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios';
import './Signup.css';


const validateForm = (formValue) => {
    let errors = {};

    if (!formValue.email) {
        errors.email = "Please enter email"
    }
    if (!formValue.password) {
        errors.password = "Please enter password"
    }
    // if (!formValue.confirmpassword) {
    //     errors.confirmpassword = "Please enter password"
    // }
    console.log("Error:", errors);
    return errors;
}
export default function Signup() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
           
        },

        validate: validateForm,
        onSubmit: (values) => {
            console.log("Receive values:", values);
            axios.post('https://node-project-storage.herokuapp.com/postLoginData', values)
                .then(res => {
                    console.log("Axios Response: ", res);
                    window.sessionStorage.setItem("TokenValue",res.data.token);
                })
                .catch(err => {
                    console.log("Axios error", err);
                })
        }
    })
    return (
        <div className='body'>
            <form className="SignupForm" onSubmit={formik.handleSubmit}>
                <h1>Signup Form</h1><br></br>
                <label className='em'>Email & Phone </label><br/>
                <input type="email" name="email" placeholder='' value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                <br />
                {formik.touched.email && formik.errors.email ? (<span>{formik.errors.email}</span>) : null}

                <label className='pas'>Password </label><br/>
                <input type="password" name="password" placeholder='' value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                <br />
                {formik.touched.password && formik.errors.password ? (<span>{formik.errors.password}</span>) : null}

                {/* <label className='cp'>Confirm Password </label><br/>
                <input type="password" name="password" placeholder=' ' value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                <br />
                {formik.touched.password && formik.errors.password ? (<span>{formik.errors.password}</span>) : null} */}



                <button type="submit" className='submit' disabled={!(formik.isValid && formik.dirty)}>Submit</button>
                <br />
            </form>

        </div>
    )
}
