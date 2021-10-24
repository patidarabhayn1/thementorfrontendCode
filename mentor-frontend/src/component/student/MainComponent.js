import React from 'react';
import Header from './HeaderComponent';
import NavigationBar from './NavbarComponent';
import { Route, Redirect, Switch} from 'react-router-dom';
import ProfileComponent from './ProfileComponent';

function Main() {
    return (
        <div className="app">
            <div className='navss'>
                <Header />
            </div>
            <div className="containers">
                <NavigationBar />
            </div>
            <div className="container mainSection">
                <Switch>
                    <Route path="/student/:studentId/profile" component={ProfileComponent}/>
                    <Redirect to="/student/home"/>
                </Switch>
            </div>
        </div>
    )
}

export default Main;
