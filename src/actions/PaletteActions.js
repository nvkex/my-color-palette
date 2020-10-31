import {
    GET_ALL_PALETTES,
} from '../constants/PaletteConstants';

import axios from 'axios';

/**
 * Logs in a user, storing their information and JWT token in redux store
 * @param {Number} status - status of the login API request
 * @param {Object} userData - All information about the user trying to login
 * @param {String} token - JWT token sent by the API
 */
const getAllPalettes = (token, userID) => async (dispatch) => {

    axios.post('https://my-color-palette.herokuapp.com/user/user-palettes', { token, id: userID })
        .then(res => {
            dispatch({ type: GET_ALL_PALETTES, payload: {...res.data} })
        })
        .catch(err => console.log(err));
}
/**
 * Logs out the user
 */

export { getAllPalettes };