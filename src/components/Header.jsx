import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';


export default function Header() {
  return (
    <div>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='navbarContainer'>
        <Navbar.Brand href="#home">Pokedex 7000!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='navHome' href="#home">Home</Nav.Link>
            <Nav.Link className='navAbout' href="#about">About</Nav.Link>
            <Nav.Link className='navContact' href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
