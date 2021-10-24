import React from 'react';
import Header from './HeaderComponent';
import NavigationBar from './NavbarComponent';
import { Route, Redirect, Switch} from 'react-router-dom';
import TeacherHome from './HomeComponent';
import BatchComponent from './BatchComponent';

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
                    <Route exact path="/teacher/home" component={TeacherHome}/>
                    <Route path="/teacher/batch/:batchId" component={BatchComponent}/>
                    <Redirect to="/teacher/home"/>
                </Switch>
            </div>
        </div>
    )
}

export default Main;