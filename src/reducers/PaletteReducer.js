import {
    GET_ALL_PALETTES,
    GET_SINGLE_PALETTE
} from '../constants/PaletteConstants';

/**
 * 
 * @param {Object} state - previous state
 * @param {Const} action - type of action to perform
 * @returns {Object} - Returns the new state according to actions
 */
function paletteReducer(state = {}, action) {
    switch (action.type) {
        case GET_SINGLE_PALETTE:
            return { currentPalette: action.payload };
        case GET_ALL_PALETTES:
            return { userPalettes: action.payload };
        default:
            return state;
    }
}

export { paletteReducer };