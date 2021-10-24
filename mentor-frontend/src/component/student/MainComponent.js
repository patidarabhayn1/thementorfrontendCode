import React, {Component} from "react";
import {Switch, Route, BrowserRouter, Redirect} from 'react-router-dom';

class Home extends Component{
    render(){
        return(
            <div>
                    
                    <Route path = "/home" component = {Login}/>
                    <Redirect to="/home"/>
            </div>
        );
    }
}

export default Home;