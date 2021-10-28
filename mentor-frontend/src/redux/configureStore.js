import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Auth } from './auth';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Redirect from './ui';
import Message from './message';
import Teacher from './teacherProfile';
import Batches from './batches';
import Batch from './batch';
import Students from './students';
import Student from './student';
import Internship from './internshipCertificate';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            redirect: Redirect,
            auth: Auth,
            message: Message,
            teacher: Teacher,
            batches: Batches,
            batch: Batch,
            students: Students,
            student: Student,
            internship: Internship
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}