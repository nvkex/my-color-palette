import {
    DEFAULT_PALETTES_REQUEST,
    DEFAULT_PALETTES_SUCCESS,
    DEFAULT_PALETTES_FAIL
} from '../constants/defaultPalettesConstants';

/**
 * Get default palettes from payload and save it in the store.
 * @param {Object} state - Current state
 * @param {Object} action - dispatched actions
 */
function defaultPalettesReducer(state = { defaultPalettesList: [] }, action) {
    switch (action.type) {
        case DEFAULT_PALETTES_REQUEST:
            return { loading: true };
        case DEFAULT_PALETTES_SUCCESS:
            return { loading: false, defaultPalettesList: action.payload }
        case DEFAULT_PALETTES_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export { defaultPalettesReducer };