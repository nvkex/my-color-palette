import React from 'react'

const Signup = () => {
    return (
        <div className="signup">
            <form className="shadow-lg" action="/">
                <h3 className="text-center">Join Us!</h3>
                <label>Email</label>
                <input type="text" name="email" placeholder="" />
                <br />
                <label>Password</label>
                <input type="text" name="password" placeholder="" />
                <br />
                <label>Confirn Password</label>
                <input type="text" name="cnfPass" placeholder="" />
                

                <br />
                <input type="submit" value="Signup" />
            </form>
        </div>
    )
}

export default Signup
