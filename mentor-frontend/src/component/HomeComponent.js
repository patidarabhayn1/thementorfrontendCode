import React, {Component} from "react";
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Login from './Registration/signIn';
import Signup from './Registration/signUp';
import TeacherMain from './Teacher/MainComponent';
import StudentMain from './student/MainComponent';
import { connect } from 'react-redux';
import { loginTeacher, logoutTeacher, loginStudent, logoutStudent, loadTeacherProfile, removeMessage, loadBatch, loadStudentBatch} from '../redux/ActionCreators';
import { addBatch, deleteBatch, addStudent, deleteStudent, addMeeting, deleteMeeting,  loadStudentProfile, loadInternshipCertificate } from "../redux/ActionCreators";
import { addInternship, loadLoggedStudent, deleteInternship, addCourse, deleteCourse } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        auth: state.auth,
        redirect: state.redirect,
        message: state.message,
        teacher: state.teacher,
        batches: state.batches,
        batch: state.batch,
        students: state.students,
        student: state.student,
        internship: state.internship
    }
}

const mapDispatchToProps = (dispatch) => ({
    loginStudent: (creds) => dispatch(loginStudent(creds)),
    loginTeacher: (creds) => dispatch(loginTeacher(creds)),
    logoutStudent: () => dispatch(logoutStudent()),
    logoutTeacher: () => dispatch(logoutTeacher()),
    loadTeacherProfile: () => dispatch(loadTeacherProfile()),
    removeMessage: () => dispatch(removeMessage()),
    loadBatch: (batchId) => dispatch(loadBatch(batchId)),
    loadStudentBatch: () => dispatch(loadStudentBatch()),
    addBatch: (batch) => dispatch(addBatch(batch)),
    deleteBatch: (batchId) => dispatch(deleteBatch(batchId)),
    addStudent: (batchId, student) => dispatch(addStudent(batchId, student)),
    deleteStudent: (batchId, student) => dispatch(deleteStudent(batchId, student)),
    addMeeting: (batchId, meeting) => dispatch(addMeeting(batchId, meeting)),
    deleteMeeting: (batchId, meeting) => dispatch(deleteMeeting(batchId, meeting)),
    loadStudentProfile: (studentId) => dispatch(loadStudentProfile(studentId)),
    loadInternshipCertificate: (studentId, certificateId) => dispatch(loadInternshipCertificate(studentId, certificateId)),
    addInternship: (studentId, internship) => dispatch(addInternship(studentId, internship)),
    deleteInternship: (internshipId) => dispatch(deleteInternship(internshipId)),
    addCourse: (studentId, course) => dispatch(addCourse(studentId, course)),
    deleteCourse: (courseId) => dispatch(deleteCourse(courseId)),
    loadLoggedStudent: () => dispatch(loadLoggedStudent())
})

class Home extends Component{
    render(){
        if(this.props.auth.isAuthenticated && this.props.auth.isTeacher && (!this.props.teacher.isLoading) && this.props.teacher.profile == null && !this.props.teacher.errMess) {
            this.props.loadTeacherProfile();
        }
        else if(this.props.auth.isAuthenticated && !this.props.auth.isTeacher && (!this.props.student.isLoading) && this.props.student.profile == null && !this.props.student.errMess) {
            this.props.loadLoggedStudent();
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
                    addMeeting = {this.props.addMeeting}
                    deleteMeeting = {this.props.deleteMeeting}
                />
            );
        }

        const StudentPage = () => {
            return(
                <StudentMain 
                    message={this.props.message} 
                    removeMessage = {this.props.removeMessage}
                    loadStudentProfile = {this.props.loadStudentProfile}
                    student = {this.props.student}
                    internship = {this.props.internship}
                    loadInternshipCertificate = {this.props.loadInternshipCertificate}
                    addInternship = {this.props.addInternship}
                    deleteInternship = {this.props.deleteInternship}
                    addCourse = {this.props.addCourse}
                    deleteCourse = {this.props.deleteCourse}
                    auth = {this.props.auth}
                    loadLoggedStudent = {this.props.loadLoggedStudent}
                    logoutStudent = {this.props.logoutStudent}
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
        
        const PrivateRoute = ({ component: Component, ...rest }) => (
            <Route {...rest} render={(props) => (
              this.props.auth.isAuthenticated
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
                    <PrivateRoute path = "/student" component = {StudentPage}/>
                    <Redirect to="/login"/>
                </Switch>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));