import {
    LOGIN,
    LOGOUT
} from '../constants/AuthConstants';

const loginUser = (status, userData, token) => async (dispatch) => {
    if (status === 200)
        dispatch({ type: LOGIN, payload: {userData, token} })
}

const logoutUser = () => async (dispatch) => {
    dispatch({ type: LOGOUT })
}

export { loginUser, logoutUser };