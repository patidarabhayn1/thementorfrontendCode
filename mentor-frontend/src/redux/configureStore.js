import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Auth } from './auth';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Redirect from './ui';
import Message from './message';
import Teacher from './teacherProfile';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            redirect: Redirect,
            auth: Auth,
            message: Message,
            teacher: Teacher
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}