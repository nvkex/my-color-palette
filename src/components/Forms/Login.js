import React from 'react'

const Login = () => {
    return (
        <div className="login">
            <form className="shadow-lg" action="www.google.com/">
                <h3 className="text-center">Welcome Back!</h3>
                <label>Username</label>
                <input type="text" name="username" placeholder="" />
                <br />
                <label>Password</label>
                <input type="text" name="password" placeholder="" />

                <span>
                    <a href="/">Forgot password?</a>
                </span>

                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login;
