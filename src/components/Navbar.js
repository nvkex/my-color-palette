import React from 'react'
import { withRouter } from 'react-router';

import classes from './Navbar.module.css';

/**
 * Fixed navbar for all pages
 * @param {Object} history - To redirect user using 'goBack()'
 */
const Navbar = ({history}) => {

    
    const backHandler = () => {
       history.goBack();
    }

    return (
        <div className={`${classes.navbar} shadow-sm`}>
            <button onClick={backHandler}>← Back</button>
            <span className={classes.title}><i>My Color Palette</i></span>
            <span>
                <a href="https://github.com/nvkex/my-color-palette" target='_blank' rel="noopener noreferrer">
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
