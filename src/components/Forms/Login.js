import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, withRouter } from 'react-router';

import { loginUser } from '../../actions/AuthActions';
import Modal from '../Modal';

const Login = () => {

    const auth = useSelector(state => state.authReducer);

    const { token } = auth;
    const dispatch = useDispatch();

    const [modalData, setModalData] = useState({ display: false });

    useEffect(() => {

        /**
         * Validate and submit form
         * If login successful, dispatch loginUser and save user info and token to local storage variables.
         * If user is already logged in, redirect to homepage.
         */
        function submitForm() {
            const loader = document.querySelector('.lds-ring');
            const submitBtn = document.querySelector('#submitForm');
            submitBtn.addEventListener('click', (e) => {

                e.preventDefault();

                loader.style.display = 'inline-block';

                const email = document.querySelector('#email').value;
                const password = document.querySelector('#password').value;
                const formData = { email, password };

                if (!email || !password) {
                    setModalData({ display: true, head: "Error!", desc: "Email or Password cannot be empty!", color: "danger" });
                    loader.style.display = 'none';
                    return;
                }

                axios.post('https://my-color-palette.herokuapp.com/auth/login', formData)
                    .then(res => {
                        dispatch(loginUser(res.status, res.data.user, res.data.token));
                        localStorage.setItem('token', res.data.token);
                        localStorage.setItem('user', JSON.stringify(res.data.user));
                        loader.style.display = 'none';
                    })
                    .catch(err => {
                        console.log(err);
                        loader.style.display = 'none';
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
        <div>
            <Modal data={modalData} setDisplay={setModalData} />
            <div className="login">
                <form className="shadow-lg" action="www.google.com/">
                    <h3 className="text-center">Welcome Back!</h3>
                    <label>Username</label>
                    <input type="text" name="email" placeholder="Username/Email" id="email" />
                    <label />
                    <label>Password</label>
                    <input type="password" name="password" placeholder="No one's looking." id="password" />

                    <span>
                        <a href="/">Forgot password?</a>
                    </span>

                    <label /><label />
                    <input type="submit" value="Login" id="submitForm" />
                    <label></label>
                    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                </form>
            </div>
        </div>
    )
}

export default withRouter(Login);
