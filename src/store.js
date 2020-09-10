import { combineReducers, compose, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { defaultPalettesReducer } from './reducers/defPaletteReducers';

const initialState = {};

const reducer = combineReducers({
    defaultPalettes: defaultPalettesReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;