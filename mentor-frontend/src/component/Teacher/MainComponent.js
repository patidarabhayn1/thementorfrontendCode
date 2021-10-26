import React from 'react';
import Header from './HeaderComponent';
import NavigationBar from './NavbarComponent';
import { Route, Redirect, Switch} from 'react-router-dom';
import TeacherHome from './HomeComponent';
import BatchComponent from './BatchComponent';

function Main(props) {
    return (
        <div className="app">
            <div className='navss'>
                <Header/>
            </div>
            <div className="containers">
                <NavigationBar teacher={props.teacher}/>
            </div>
            <div className="container mainSection">
                <Switch>
                    <Route path="/teacher/home" component = {() => <TeacherHome message={props.message} />}/>
                    <Route path="/teacher/batch/:batchId" component = {() => <BatchComponent message={props.message} />}/>
                    <Redirect to="/teacher/home" component = {() => <TeacherHome message={props.message} />}/>
                </Switch>
            </div>
        </div>
    )
}

export default Main;
