// src/components/Navigation.js
import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css'; // Assuming you have a Navbar.css for additional styling

function Navigation() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleClose = () => {
    setExpanded(false);
  };

  return (
    <Navbar bg="" variant="dark" expand="lg" fixed="top" expanded={expanded}>
      <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#about" onClick={handleClose}>About</Nav.Link>
          <Nav.Link href="#projects" onClick={handleClose}>Projects</Nav.Link>
          <Nav.Link href="#skills" onClick={handleClose}>Skills</Nav.Link>
          <Nav.Link href="#contact" onClick={handleClose}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
