import React from 'react';
import Header from './HeaderComponent';
import NavigationBar from './TeacherNavbarComponent';

function TeacherHome() {
    return (
        <div className="app">
            <div className='navss'>
                <Header />
            </div>
            <div className="containers">
                <NavigationBar />
                <div className="contents">

                </div>
            </div>
        </div>
    )
}

export default TeacherHome
