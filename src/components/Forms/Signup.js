import axios from 'axios';
import React from 'react'
import { withRouter } from 'react-router';

const formHandler = async (props, e) => {

    const URL = "https://my-color-palette.herokuapp.com";
    e.preventDefault();

    var emailExists = false;

    const loader = document.querySelector('.lds-ring');
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#pass').value;
    const cnfPassword = document.querySelector('#cnfPass').value;
    const formData = { name, email, password };

    if (!password || !cnfPassword || !email || !name) {
        alert('Fields cannot be empty!');
        return;
    }

    // Check if confirm password matches with password
    if (password !== cnfPassword) {
        alert('Password did not match!');
        return;
    }

    loader.style.display = 'inline-block';

    // Check if email exists
    await axios.get(`${URL}/auth/check-email?email=${email}`)
        .then(res => {
            emailExists = res.data.exists;
        })
        .catch(err => {
            console.log(err);
        });

    if (emailExists) {
        alert('Email already exists!');
        loader.style.display = 'none';
        return;
    }

    // All good, user can now register.
    axios.post(`${URL}/auth/signup`, formData)
        .then(res => {
            if (res.data.status === 200) {
                props.history.push('/login');
            }
            else
                alert('Error occured! Try again later.');
        })
        .catch(err => {
            console.log(err);
        })

        loader.style.display = 'none';

}


const Signup = (props) => {


    return (
        <div className="signup">
            <form className="shadow-lg" action="/">
                <h3 className="text-center">
                    Join Us!
                </h3>
                <label>Name</label>
                <input type="text" name="name" id="name" placeholder="" required />
                <label></label>
                <label>Email</label>
                <input type="email" name="email" id="email" placeholder="" required />
                <label></label>
                <label>Password</label>
                <input type="password" name="password" id="pass" placeholder="" required />
                <label></label>
                <label>Confirm Password</label>
                <input type="password" name="cnfPass" id="cnfPass" placeholder="" required />

                <label></label>
                <label></label>
                <input type="submit" value="Signup" onClick={(e) => formHandler(props, e)} />
                <label></label>
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </form>
        </div>
    )
}

export default withRouter(Signup);
