import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Link to="/" className="navbar-brand">
            CRUD Cafe
          </Link>

          <Nav className="ms-auto">
            <Link to="/" className="nav-link">
              Inicio
            </Link>
            <Link to="/productos" className="nav-link">
              Productos
            </Link>
            <Link to="/error404" className="nav-link">
              Extras
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
