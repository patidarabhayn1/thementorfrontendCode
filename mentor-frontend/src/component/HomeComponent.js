import React, {Component} from "react";
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Login from './Registration/signIn';
import Signup from './Registration/signUp';
import TeacherMain from './Teacher/MainComponent';
import StudentMain from './student/MainComponent';
import { connect } from 'react-redux';
import { loginTeacher, logoutTeacher, loginStudent, logoutStudent} from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        auth: state.auth,
        redirect: state.redirect
    }
}

const mapDispatchToProps = (dispatch) => ({
    loginStudent: (creds) => dispatch(loginStudent(creds)),
    loginTeacher: (creds) => dispatch(loginTeacher(creds)),
    logoutStudent: () => dispatch(logoutStudent()),
    logoutTeacher: () => dispatch(logoutTeacher()),
})

class Home extends Component{
    render(){
        const LoginPage = () => {
            return(
                <Login 
                    auth = {this.props.auth}
                    loginStudent={this.props.loginStudent} 
                    logoutStudent={this.props.logoutStudent} 
                    loginTeacher={this.props.loginTeacher} 
                    logoutTeacher={this.props.logoutTeacher} 
                />
            )
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
                    <TeacherPrivateRoute path = "/teacher" component = {TeacherMain}/>
                    <Route path = "/student" component = {StudentMain}/>
                    <Redirect to="/login"/>
                </Switch>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));