import React, { useState} from 'react';
import 'antd/dist/antd.css';
import '../../styles/Register.css';
import StudentSignIn from './studentSignIn';
import FacultySignIn from './facultySignIn';
const Register = () => {

    const [currentState, setCurrentState] = useState(1);


    function handleClick(button) {
        if (button === 'signUp') {
            setCurrentState(0);
        } else if (button == 'signIn') {
            setCurrentState(1);
        }
    }

    return (
        <div className="login-page">
            <div className="login-box">
                <div className="illustration-wrapper">
                    <img src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700" alt="Login" />
                </div>
                <div className="form-Box">
                    <div className='formHeader'>
                        <div
                            className={currentState ? 'headerActive' : 'headerInActive'}
                            onClick={() => {

                                setCurrentState(1);

                            }}
                        >
                            <button className='headerButton'> Faculty </button>
                        </div>
                        <div
                            className={currentState ? 'headerInActive' : 'headerActive'}
                            onClick={() => {
                                setCurrentState(0);
                            }}
                        >
                            <button className='headerButton'> Student </button>
                        </div>

                    </div>
                    <div className='formBody'>
                        {
                            currentState ? <FacultySignIn /> : <StudentSignIn />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};





export default Register;
