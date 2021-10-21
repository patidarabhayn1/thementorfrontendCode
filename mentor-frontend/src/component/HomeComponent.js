import React, {Component} from "react";
import {Switch, Route, BrowserRouter, Redirect} from 'react-router-dom';
import Login from '../register/signIn';
import Signup from '../register/signUp';

class Home extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path = "/login" component = {Login}/>
                    <Route path = "/signup" component = {Signup}/>
                    <Redirect to="/login"/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Home;