import React from 'react'
import { withRouter } from 'react-router'

const Navbar = ({history}) => {

    
    const backHandler = () => {
       history.goBack();
    }

    return (
        <div className="navbar shadow-sm">
            <button onClick={backHandler}>← Back</button>
            <span className="title"><i>My Color Palette</i></span>
            <span>
                <a href="https://www.github.com/nvkex" target='_blank' rel="noopener noreferrer">
                    <i
                        className="fa fa-github"
                        style={{ fontSize: '30px' }}
                        aria-hidden="true">
                    </i>
                </a>
            </span>
        </div>
    )
}

export default withRouter(Navbar);
