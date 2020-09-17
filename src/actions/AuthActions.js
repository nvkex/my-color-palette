import {
    LOGIN,
    LOGOUT
} from '../constants/AuthConstants';

/**
 * Logs in a user, storing their information and JWT token in redux store
 * @param {Number} status - status of the login API request
 * @param {Object} userData - All information about the user trying to login
 * @param {String} token - JWT token sent by the API
 */
const loginUser = (status, userData, token) => async (dispatch) => {
    if (status === 200)
        dispatch({ type: LOGIN, payload: {userData, token} })
}
/**
 * Logs out the user
 */
const logoutUser = () => async (dispatch) => {
    dispatch({ type: LOGOUT })
}

export { loginUser, logoutUser };