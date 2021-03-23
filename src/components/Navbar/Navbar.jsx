import styles from "./navbar.module.css";
import { Navbar as NavBar, Nav, Container } from "react-bootstrap";
import itemLinks from "../../data/itemLinks.json";
import React from "react";

function Navbar() {
  return (
    <React.Fragment>
      <Container className="mt-2">
        <NavBar bg="white" expand="lg">
          <NavBar.Brand className="navbar-brand px-4" href="/">
            CNBlog
          </NavBar.Brand>
          <NavBar.Toggle aria-controls="basic-navbar-nav" />
          <NavBar.Collapse className="px-4" id="basic-navbar-nav">
            <Nav className="ms-auto">
              {itemLinks.link.map((item, index) => (
                <React.Fragment key={index}>
                  <Nav.Link href={item.href}>
                    <NavBar.Brand className={`navbar-brand ${styles.navbrand}`}>
                      {item.title}
                    </NavBar.Brand>
                  </Nav.Link>
                </React.Fragment>
              ))}
            </Nav>
          </NavBar.Collapse>
        </NavBar>
      </Container>
      <hr />
    </React.Fragment>
  );
}

export default Navbar;
