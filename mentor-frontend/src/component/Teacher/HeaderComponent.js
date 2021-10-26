import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from "react-bootstrap";
import {Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/teacher/home"><Link to="/teacher/home">The Mentor</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <div className="navs">

                            <Nav className="me-auto">
                                <Nav.Link href="/teacher/home"><span className="fa fa-home fa-lg"></span>Home</Nav.Link>
                            </Nav>

                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    };
}

export default Header;