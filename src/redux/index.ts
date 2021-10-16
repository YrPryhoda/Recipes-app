import {combineReducers, createStore} from 'redux';
import {appReducer} from "./appReducer";
import {composeWithDevTools} from 'redux-devtools-extension';


export const store = createStore(
    appReducer,
    composeWithDevTools()
);