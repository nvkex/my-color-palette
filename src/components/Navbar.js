import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar shadow-sm">
            <span>← Back</span>
            <span className="title"><i>My Color Pallete</i></span>
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

export default Navbar;
