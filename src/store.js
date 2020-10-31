import { combineReducers, compose, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { defaultPalettesReducer } from './reducers/defPaletteReducers';
import {authReducer} from './reducers/AuthReducer';
import {paletteReducer} from './reducers/PaletteReducer';

const initialState = {};

const reducer = combineReducers({
    defaultPalettes: defaultPalettesReducer,
    authReducer: authReducer,
    paletteReducer: paletteReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;