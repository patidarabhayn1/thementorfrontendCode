import React, {Component} from "react";
import {Switch, Route, BrowserRouter, Redirect} from 'react-router-dom';
import Login from './Registration/signIn';
import Signup from './Registration/signUp';
import TeacherMain from './Teacher/MainComponent';
import StudentMain from './student/MainComponent';

class Home extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path = "/login" component = {Login}/>
                    <Route path = "/signup" component = {Signup}/>
                    <Route path = "/teacher" component = {TeacherMain}/>
                    <Route path = "/student" component = {StudentMain}/>
                    <Redirect to="/login"/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Home;