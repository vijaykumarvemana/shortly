import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar  expand="lg">
    <Container>
      <Navbar.Brand href="#home" className="fw-bolder">Shortly</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto fw-bold">
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <Nav.Link href="#Resources">Resources</Nav.Link>
        </Nav>
        <Nav>
            <Nav.Link href="#deets">
            <Button  variant="light" className="text-dark rounded-pill fw-bold px-3 bg-white ">Login</Button>
            </Nav.Link>
            <Nav.Link >
            <Button variant="info" className="text-white rounded-pill fw-bold ">SignUp</Button>
            </Nav.Link>
          </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
      );
    }
    
  
 


export default NavBar