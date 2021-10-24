import React, {Component} from "react";
import {Switch, Route, BrowserRouter, Redirect} from 'react-router-dom';
import Login from '../register/signIn';
import Signup from '../register/signUp';
import Profile from '../component/ProfileComponent';
import TeacherHome from '../component/TeacherHome';
import StudentMain from '../component/student/MainComponent';

class Home extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path = "/login" component = {Login}/>
                    <Route path = "/signup" component = {Signup}/>
                    <Route path = "/profile" component = {Profile}/>
                    <Route path = "/teacher" component = {TeacherHome}/>
                    <Route path = "/student" component = {StudentMain}/>
                    {/* <Route path = "/teacher/courses" component = {Courses}/>
                    <Route path = "/teacher/result" component = {Result}/>
                    <Route path = "/teacher/absence" component = {MajorAbsence}/>
                    <Route path = "/teacher/activity" component = {IndisciplinaryActivity}/> */}
                    <Redirect to="/login"/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Home;