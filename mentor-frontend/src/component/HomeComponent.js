import React, {Component} from "react";
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Login from './Registration/signIn';
import Signup from './Registration/signUp';
import TeacherMain from './Teacher/MainComponent';
import StudentMain from './student/MainComponent';
import { connect } from 'react-redux';
import { loginTeacher, logoutTeacher, loginStudent, logoutStudent, loadTeacherProfile, removeMessage, loadBatch, loadStudentBatch} from '../redux/ActionCreators';
import { addBatch, deleteBatch, addStudent, deleteStudent } from "../redux/ActionCreators";

const mapStateToProps = state => {
    return {
        auth: state.auth,
        redirect: state.redirect,
        message: state.message,
        teacher: state.teacher,
        batches: state.batches,
        batch: state.batch,
        students: state.students
    }
}

const mapDispatchToProps = (dispatch) => ({
    loginStudent: (creds) => dispatch(loginStudent(creds)),
    loginTeacher: (creds) => dispatch(loginTeacher(creds)),
    logoutStudent: () => dispatch(logoutStudent()),
    logoutTeacher: () => dispatch(logoutTeacher()),
    loadTeacherProfile: () => dispatch(loadTeacherProfile()),
    removeMessage: () => dispatch(removeMessage()),
    loadBatch: () => dispatch(loadBatch()),
    loadStudentBatch: () => dispatch(loadStudentBatch()),
    addBatch: (batch) => dispatch(addBatch(batch)),
    deleteBatch: (batchId) => dispatch(deleteBatch(batchId)),
    addStudent: (batchId, student) => dispatch(addStudent(batchId, student)),
    deleteStudent: (batchId, student) => dispatch(deleteStudent(batchId, student))
})

class Home extends Component{
    render(){
        if(this.props.auth.isAuthenticated && this.props.auth.isTeacher && (!this.props.teacher.isLoading) && this.props.teacher.profile == null && !this.props.teacher.errMess) {
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
                    removeMessage = {this.props.removeMessage}
                    batches = {this.props.batches}
                    batch = {this.props.batch}
                    loadBatch = {this.props.loadBatch}
                    students = {this.props.students}
                    loadStudentBatch = {this.props.loadStudentBatch}
                    addBatch = {this.props.addBatch}
                    deleteBatch = {this.props.deleteBatch}
                    addStudent = {this.props.addStudent}
                    deleteStudent = {this.props.deleteStudent}
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