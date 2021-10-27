import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../component/baseUrl';
import { useParams } from 'react-router-dom';


//TEACHER AUTHENTICATION
export const teacherRequestLogin = (creds) => {
    return {
        type: ActionTypes.TEACHER_LOGIN_REQUEST,
        creds
    }
}
export const teacherReceiveLogin = (response) => {
    return {
        type: ActionTypes.TEACHER_LOGIN_SUCCESS,
        token: response.token
    }
}
export const teacherLoginError = (message) => {
    return {
        type: ActionTypes.TEACHER_LOGIN_FAILURE,
        message
    }
}
export const loginTeacher = (creds) => (dispatch) => {
    // We dispatch teacherRequestLogin to kickoff the call to the API
    dispatch(teacherRequestLogin(creds))

    return fetch(baseUrl + 'teachers/login', {
        method: 'POST',
        headers: { 
            'Content-Type':'application/json' 
        },
        body: JSON.stringify(creds)
    })
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
        },
        error => {
            throw error;
        })
    .then(response => response.json())
    .then(response => {
        if (response.success) {
            // If login was successful, set the token in local storage
            localStorage.setItem('token', response.token);
            localStorage.setItem('isTeacher', true);
            localStorage.setItem('creds', JSON.stringify(creds));
            // Dispatch the success action
            // dispatch(fetchFavorites());
            dispatch(teacherReceiveLogin(response));
            dispatch(addMessage("LOGIN SUCCECCFUL"));
            dispatch(redirect("/teacher/home"));
        }
        else {
            var error = new Error('Error ' + response.status);
            error.response = response;
            throw error;
        }
    })
    .catch(error => dispatch(teacherLoginError(error.message)))
};
export const teacherRequestLogout = () => {
    return {
      type: ActionTypes.TEACHER_LOGOUT_REQUEST
    }
}
export const teacherReceiveLogout = () => {
    return {
      type: ActionTypes.TEACHER_LOGOUT_SUCCESS
    }
}
export const logoutTeacher = () => (dispatch) => {
    dispatch(teacherRequestLogout())
    localStorage.removeItem('token');
    localStorage.removeItem('isTeacher');
    localStorage.removeItem('creds');
    // dispatch(favoritesFailed("Error 401: Unauthorized"));
    dispatch(teacherReceiveLogout())
}

//STUDENT AUTHENTICATION
export const studentRequestLogin = (creds) => {
    return {
        type: ActionTypes.STUDENT_LOGIN_REQUEST,
        creds
    }
}  
export const studentReceiveLogin = (response) => {
    return {
        type: ActionTypes.STUDENT_LOGIN_SUCCESS,
        token: response.token
    }
} 
export const studentLoginError = (message) => {
    return {
        type: ActionTypes.STUDENT_LOGIN_FAILURE,
        message
    }
}
export const loginStudent = (creds) => (dispatch) => {
    // We dispatch studentRequestLogin to kickoff the call to the API
    dispatch(studentRequestLogin(creds))

    return fetch(baseUrl + 'student/login', {
        method: 'POST',
        headers: { 
            'Content-Type':'application/json' 
        },
        body: JSON.stringify(creds)
    })
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
        },
        error => {
            throw error;
        })
    .then(response => response.json())
    .then(response => {
        if (response.success) {
            // If login was successful, set the token in local storage
            localStorage.setItem('token', response.token);
            localStorage.setItem('isTeacher', false);
            localStorage.setItem('creds', JSON.stringify(creds));
            // Dispatch the success action
            // dispatch(fetchFavorites());
            dispatch(studentReceiveLogin(response));
        }
        else {
            var error = new Error('Error ' + response.status);
            error.response = response;
            throw error;
        }
    })
    .catch(error => dispatch(studentLoginError(error.message)))
};
export const studentRequestLogout = () => {
    return {
      type: ActionTypes.STUDENT_LOGOUT_REQUEST
    }
}
export const studentReceiveLogout = () => {
    return {
      type: ActionTypes.STUDENT_LOGOUT_SUCCESS
    }
}

// Logs the user out
export const logoutStudent = () => (dispatch) => {
    dispatch(studentRequestLogout())
    localStorage.removeItem('token');
    localStorage.removeItem('isTeacher');
    localStorage.removeItem('creds');
    // dispatch(favoritesFailed("Error 401: Unauthorized"));
    dispatch(studentReceiveLogout())
}

export const redirect = link => {
    console.log("=== REDIRECT ACTION DISPATCHED ===");
    return { type: ActionTypes.REDIRECT, payload: link };
  };


export const showMessage = (message) => {
    return {
        type:ActionTypes.MESSAGE,
        payload: message
    }
}
export const remMessage = (message) => {
    return {
        type:ActionTypes.REMOVE_MESSAGE,
    }
}
export const removeMessage = () => (dispatch) => {
    dispatch(remMessage());
}
export const addMessage = (message) => (dispatch) => {
    dispatch(showMessage(message));
}

export const teacherProfileLoading = () => {
    return {
        type:ActionTypes.TEACHER_PROFILE_LOADING
    }
}
export const teacherProfileFailed = (errMess) => {
    return {
        type:ActionTypes.TEACHER_PROFILE_FAILED,
        payload: errMess
    }
}
export const teacherProfileSuccess = (user) => {
    return {
        type:ActionTypes.TEACHER_PROFILE_SUCCESS,
        payload: user
    }
}
export const loadTeacherProfile = () => (dispatch) => {
    dispatch(teacherProfileLoading());
    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'teachers/profile', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(response => dispatch(teacherProfileSuccess(response)))
    .then(() => dispatch(loadBatches()))
    .catch(error => dispatch(teacherProfileFailed(error)))
}


export const batchesLoading = () => {
    return{
        type: ActionTypes.BATCHES_LOADING
    }
}
export const batchesSuccess = (batches) => {
    return{
        type: ActionTypes.BATCHES_SUCCESS,
        payload: batches
    }
}
export const batchesFailed = (errMess) => {
    return{
        type: ActionTypes.BATCHES_FAILED,
        payload: errMess
    }
}
export const loadBatches = () => (dispatch) => {
    dispatch(batchesLoading());
    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'mentoring', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(response => dispatch(batchesSuccess(response)))
    .catch(error => dispatch(batchesFailed(error)))
}

export const batchLoading = () => {
    return{
        type: ActionTypes.BATCH_LOADING
    }
}
export const batchSuccess = (batch) => {
    return{
        type: ActionTypes.BATCH_SUCCESS,
        payload: batch
    }
}
export const batchFailed = (errMess) => {
    return{
        type: ActionTypes.BATCH_FAILED,
        payload: errMess
    }
}
export const loadBatch = () => (dispatch) => {
    const { batchId } = useParams();
    dispatch(batchLoading());
    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'mentoring/' + batchId, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(response => dispatch(batchSuccess(response)))
    .then(() => dispatch(loadStudentBatch(batchId)))
    .catch(error => dispatch(batchFailed(error)))
}

export const batchStudentLoading = () => {
    return{
        type: ActionTypes.STUDENT_IN_BATCH_LOADING
    }
}
export const batchStudentSuccess = (students) => {
    return{
        type: ActionTypes.STUDENT_IN_BATCH_SUCCESS,
        payload: students
    }
}
export const batchStudentFailed = (errMess) => {
    return{
        type: ActionTypes.STUDENT_IN_BATCH_FAILED,
        payload: errMess
    }
}
export const loadStudentBatch = (batchId) => (dispatch) => {
    dispatch(batchStudentLoading());
    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'mentoring/' + batchId +'/students', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(response => dispatch(batchStudentSuccess(response)))
    .catch(error => dispatch(batchStudentFailed(error)))
}