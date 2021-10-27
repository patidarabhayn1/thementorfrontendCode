import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Auth } from './auth';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Redirect from './ui';
import Message from './message';
import Teacher from './teacherProfile';
import Batches from './batches';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            redirect: Redirect,
            auth: Auth,
            message: Message,
            teacher: Teacher,
            batches: Batches
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}