import axios from 'axios';
import {
    DEFAULT_PALETTES_REQUEST,
    DEFAULT_PALETTES_SUCCESS,
    DEFAULT_PALETTES_FAIL
} from '../constants/defaultPalettesConstants';

const listDefaultPalettes = () => async (dispatch) => {
    try {
        dispatch({ type: DEFAULT_PALETTES_REQUEST });
        const { data } = await axios.get('https://my-color-palette.herokuapp.com/default');
        dispatch({ type: DEFAULT_PALETTES_SUCCESS, payload: data });
    }
    catch (e) {
        dispatch({ type: DEFAULT_PALETTES_FAIL, payload: e.message });
    }
}

export { listDefaultPalettes };