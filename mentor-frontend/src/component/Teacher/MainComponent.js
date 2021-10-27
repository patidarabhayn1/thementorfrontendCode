import React, { useEffect } from 'react';
import Header from './HeaderComponent';
import NavigationBar from './NavbarComponent';
import { Route, Redirect, Switch} from 'react-router-dom';
import TeacherHome from './HomeComponent';
import BatchComponent from './BatchComponent';
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
    return (
        <div className="app">
             <DisplayMessage message = {props.message} removeMessage = {props.removeMessage}/>
            <div className='navss'>
                <Header teacher={props.teacher}/>
            </div>
            <div className="containers">
                <NavigationBar teacher={props.teacher}/>
            </div>
            <div className="container mainSection">
                <Switch>
                    <Route path="/teacher/home" component = {() => <TeacherHome message={props.message} batches = {props.batches}/>}/>
                    <Route path="/teacher/batch/:batchId" component = {() => <BatchComponent message={props.message} />}/>
                    <Redirect to="/teacher/home" component = {() => <TeacherHome message={props.message} />}/>
                </Switch>
            </div>
        </div>
    )
}

export default Main;
