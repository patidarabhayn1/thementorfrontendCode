import React, {Component} from "react";
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Login from './Registration/signIn';
import Signup from './Registration/signUp';
import TeacherMain from './Teacher/MainComponent';
import StudentMain from './student/MainComponent';
import { connect } from 'react-redux';
import { loginTeacher, logoutTeacher, loginStudent, logoutStudent, loadTeacherProfile} from '../redux/ActionCreators';
// import Loading from './LoadingComponent';

const mapStateToProps = state => {
    return {
        auth: state.auth,
        redirect: state.redirect,
        message: state.message,
        teacher: state.teacher
    }
}

const mapDispatchToProps = (dispatch) => ({
    loginStudent: (creds) => dispatch(loginStudent(creds)),
    loginTeacher: (creds) => dispatch(loginTeacher(creds)),
    logoutStudent: () => dispatch(logoutStudent()),
    logoutTeacher: () => dispatch(logoutTeacher()),
    loadTeacherProfile: () => dispatch(loadTeacherProfile()),
})

class Home extends Component{
    render(){
        if(this.props.auth.isAuthenticated && this.props.auth.isTeacher && (!this.props.teacher.isLoading) && this.props.teacher.profile == null) {
            this.props.loadTeacherProfile();
        }
        const LoginPage = () => {
            return(
                <Login 
                    auth = {this.props.auth}
                    message = {this.props.message}
                    loginStudent={this.props.loginStudent} 
                    loginTeacher={this.props.loginTeacher} 
                />
            )
        }

        const TeacherPage = () => {
            return(
                <TeacherMain 
                    message={this.props.message} 
                    teacher = {this.props.teacher}
                    logoutTeacher = {this.props.logoutTeacher}
                />
            );
        }

        const TeacherPrivateRoute = ({ component: Component, ...rest }) => (
            <Route {...rest} render={(props) => (
              this.props.auth.isAuthenticated && this.props.auth.isTeacher
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                  }} />
            )} />
          );
        
        if (this.props.redirect.redirectTo) {
            const path=this.props.redirect.redirectTo;
            this.props.redirect.redirectTo = false;
            return <Redirect to={path} />;
        }
        return(
                <Switch>
                    <Route path = "/login" component = {LoginPage}/>
                    <Route path = "/signup" component = {Signup}/>
                    <TeacherPrivateRoute path = "/teacher" component = {TeacherPage} />
                    <Route path = "/student" component = {StudentMain}/>
                    <Redirect to="/login"/>
                </Switch>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));