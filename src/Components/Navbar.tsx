import React from 'react';
import { Container, Nav, Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";


const Navigationbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Play Quiz</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link ><NavLink to='/'>Home</NavLink></Nav.Link>
                <Nav.Link ><NavLink to="/quizzes">Quizzes</NavLink></Nav.Link>
                
              </Nav>
              <Nav>
                <Nav.Link ><NavLink to="/login"><Button variant="primary">Login</Button></NavLink></Nav.Link>
                <Nav.Link ><NavLink to="/signup"><Button variant="outline-secondary">Signup</Button></NavLink></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}

export default Navigationbar;
