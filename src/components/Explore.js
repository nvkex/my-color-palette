import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './User/UserPalettes.module.css';

export default function Explore() {

    const [palettes, setPalettes] = useState();

    useEffect(() => {
        axios.get('https://my-color-palette.herokuapp.com/explore')
            .then(res => {
                setPalettes(res.data);
            })
            .catch(err => console.log(err));

        return () => { };
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [])

    return (
        <div className="main-grid">
            {
                palettes ? palettes.data.map(palette => (
                    <div key={palette._id} className={`${classes.userPalette} shadow-sm`} to="/">
                        <Link className={classes.paletteSm} >
                            {palette.colors.map((color, index) => (
                                <div key={index} className={classes.paletteSmItem} style={{ backgroundColor: color }} ></div>
                            ))}
                        </Link>
                        <span>{palette.title}</span>
                        <div className={`${classes.paletteDesc} text-muted`}>
                            <i>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg>&nbsp;
                                {palette.author.name}
                            </i>
                            <div className={classes.upvotesContainer}>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M3.204 11L8 5.519 12.796 11H3.204zm-.753-.659l4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z" />
                                </svg>
                                <span>{palette.upvotes.length}</span>
                            </div>
                            <span>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-calendar-event-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z" />
                                </svg>&nbsp;
                                {palette.createdOn.slice(0, 10)}
                            </span>
                        </div>
                    </div>
                )) : null
            }
        </div >
    );
}
