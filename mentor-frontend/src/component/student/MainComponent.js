import React from 'react';
import Header from './HeaderComponent';
import NavigationBar from './NavbarComponent';
import { Route, Redirect, Switch} from 'react-router-dom';
import ProfileComponent from './ProfileComponent';
import ResultComponent from './ResultComponent';
import SubjectComponent from './SubjectComponent';
import InternshipComponent from './InternshipComponent';
import MessageComponent from '../Registration/messageComponent';

function DisplayMessage({message, removeMessage}) {
    if(message.showMessage){
        const mess = message.showMessage;
        // removeMessage();
        return(
            <MessageComponent message={mess} removeMessage={removeMessage}/>
        );
    }
    else {
        return(
            <div></div>
        );
    }
}

function Main(props) {
    const StudentPrivateRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={(props) => (
          this.props.auth.isAuthenticated && (!this.props.auth.isTeacher)
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
              }} />
        )} />
    );

    const ProfilePage = () => {
        return(
            <ProfileComponent
                loadStudentProfile = {props.loadStudentProfile}
                student = {props.student}
                auth = {props.auth}
                loadLoggedStudent = {props.loadLoggedStudent}
            />
        );
    }
    const InternshipPage = () => {
        return(
            <InternshipComponent
                loadInternshipCertificate = {props.loadInternshipCertificate} 
                internship = {props.internship}
            />
        );
    }
    return (
        <div className="app">
             <DisplayMessage message = {props.message} removeMessage = {props.removeMessage}/>
            <div className='navss'>
                <Header />
            </div>
            <div className="containers">
                <NavigationBar />
            </div>
            <div className="container mainSection">
                <Switch>
                    <Route exact path="/student/:studentId" component={ProfilePage}/>
                    <Route path="/student/:studentId/internships/:internshipId" component={InternshipPage}/>
                    <StudentPrivateRoute path="/student/home" component={ProfilePage}/>
                    <Route exact path="/student/:studentId/result/:resultId" component={ResultComponent}/>
                    <Route exact path="/student/:studentId/result/:resultId/:subjectId" component={SubjectComponent}/>
                    <Redirect to="/student/home"/>
                </Switch>
            </div>
        </div>
    );
}

export default Main;
