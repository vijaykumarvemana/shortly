import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar  expand="lg">
    <Container>
      <Navbar.Brand href="#home" className="fw-bolder">Shortly</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='nav-bar-text'>
        <Nav className="me-auto fw-bold">
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <Nav.Link href="#Resources">Resources</Nav.Link>
        </Nav>
        <hr className='nav-horizontal-line'/>
        <Nav>
            <Nav.Link href="#deets">
            <Button  variant="light" className="text-dark rounded-pill fw-bold px-4 bg-white ">Login</Button>
            </Nav.Link>
            <Nav.Link >
            <Button variant="info" className="text-white rounded-pill px-3 fw-bold ">SignUp</Button>
            </Nav.Link>
          </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
      );
    }
    
  
 


export default NavBar