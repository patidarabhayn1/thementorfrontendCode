import React from 'react';
import Header from './HeaderComponent';
import NavigationBar from './NavbarComponent';
import { Route, Redirect} from 'react-router-dom';
import ProfileComponent from './ProfileComponent';

function Main() {
    return (
        <div className="app">
            <div className='navss'>
                <Header />
            </div>
            <div className="containers">
                <NavigationBar />
                <Route path="/student/profile" component={ProfileComponent}/>
            </div>
        </div>
    )
}

export default Main;
