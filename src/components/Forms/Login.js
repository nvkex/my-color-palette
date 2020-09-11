import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, withRouter } from 'react-router';

import { loginUser } from '../../actions/AuthActions';

const Login = () => {

    const auth = useSelector(state => state.authReducer);

    const { token } = auth;
    const dispatch = useDispatch();

    useEffect(() => {

        function submitForm() {
            const submitBtn = document.querySelector('#submitForm');
            submitBtn.addEventListener('click', (e) => {
                e.preventDefault();

                const email = document.querySelector('#email').value;
                const password = document.querySelector('#password').value;
                const formData = { email, password };

                axios.post('https://my-color-palette.herokuapp.com/auth/login', formData)
                    .then(res => {
                        dispatch(loginUser(res.status, res.data.user, res.data.token));
                    })
                    .catch(err => {
                        console.log(err);
                    })
            });
        }

        // 
        if (!token) {
            submitForm();
        }

        return () => { };
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [])

    if (token) {
        return <Redirect to="/" />
    }

    return (
        <div className="login">
            <form className="shadow-lg" action="www.google.com/">
                <h3 className="text-center">Welcome Back!</h3>
                <label>Username</label>
                <input type="text" name="email" placeholder="Username/Email" id="email" />
                <br />
                <label>Password</label>
                <input type="text" name="password" placeholder="" id="password" />

                <span>
                    <a href="/">Forgot password?</a>
                </span>

                <br />
                <input type="submit" value="Login" id="submitForm" />
            </form>
        </div>
    )
}

export default withRouter(Login);
