import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios';
import './Login.css';


const validateForm = (formValue) => {
    let errors = {};

    if (!formValue.email) {
        errors.email = "Please enter email"
    }
    if (!formValue.password) {
        errors.password = "Please enter password"
    }
    console.log("Error:", errors);
    return errors;
}
export default function Login() {
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
            <form className="logForm" onSubmit={formik.handleSubmit}>
                <h2>LOGIN FROM</h2><br/>
                <label className='phn'>Email or Phone </label><br/>
                <input type="email" name="email" placeholder='' value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                <br />
                {formik.touched.email && formik.errors.email ? (<span>{formik.errors.email}</span>) : null}
                <label className='pass'>Password</label><br/>
                <input type="password" name="password" placeholder='' value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                <br />
                {formik.touched.password && formik.errors.password ? (<span>{formik.errors.password}</span>) : null}

                <br/>
                <button type="submit" className='submit' disabled={!(formik.isValid && formik.dirty)}>LOGIN</button>
                <br />
                <span class="padding" id="not_a_member">Not a member?</span>
                    <span id="signup">Signup now</span>
            </form>

            
        </div>
    )
}
