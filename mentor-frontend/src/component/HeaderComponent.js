import React, {Component} from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from "react-bootstrap";


class Header extends Component{
    render(){
        return(
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">The Mentor</Navbar.Brand>
                
            </Container>
            </Navbar>
        );
    };
}

export default Header;