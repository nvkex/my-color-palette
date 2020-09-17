import {
    LOGIN,
    LOGOUT
} from '../constants/AuthConstants';

/**
 * 
 * @param {Object} state - previous state
 * @param {Const} action - type of action to perform
 * @returns {Object} - Returns the new state according to actions
 */
function authReducer(state = { user: {}, token:null }, action) {
    switch (action.type) {
        case LOGIN:
            return { user: action.payload.userData, token: action.payload.token};
        case LOGOUT:
            return { user: null, token: null };
        default:
            return state;
    }
}

export { authReducer };