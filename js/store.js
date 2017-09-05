import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from "redux-logger";

import allReducers from './reducers/index';

const middleware = applyMiddleware(promise, thunk, logger());

export const store = createStore(
    allReducers,
    middleware
);