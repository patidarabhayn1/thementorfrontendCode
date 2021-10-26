import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Auth } from './auth';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Redirect from './ui';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            redirect: Redirect,
            auth: Auth
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}