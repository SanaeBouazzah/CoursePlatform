import React from "react";
import logo from "../logo.png";
import "../index.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="Logo"
          />
          <span className="logo_name">Portail Universitaire</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Button className="se_connecter border-0 rounded-1">Se Connecter</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;