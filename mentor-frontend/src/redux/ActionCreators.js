import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../component/baseUrl';

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

// export const removeRedirect = () => {
//     return{
//         type: ActionTypes.REMOVE_REDIRECT
//     }
// }

export const redirect = link => {
    console.log("=== REDIRECT ACTION DISPATCHED ===");
    return { type: ActionTypes.REDIRECT, payload: link };
  };