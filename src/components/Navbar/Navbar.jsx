import React from "react";
import Link from 'next/link';
import { Navbar as NavBar, Nav, Container } from "react-bootstrap";
import styles from "./navbar.module.css";
import itemLinks from "../../data/itemLinks.json";

function Navbar() {
  return (
    <React.Fragment>
      <Container className="mt-2">
        <NavBar bg="white" expand="lg">
          <Link href="/">
          <NavBar.Brand className={`navbar-brand ${styles.navbrand}`}>
            CNBlog <span className={styles.vol}>v3</span>
          </NavBar.Brand>
          </Link>
          <NavBar.Toggle aria-controls="basic-navbar-nav" />
          <NavBar.Collapse  id="basic-navbar-nav">
            <Nav className="ml-auto">
              {itemLinks.link.map((item, index) => (
                <React.Fragment key={index}>
                  <Link href={item.href}>
                    <NavBar.Brand className={`navbar-brand ${styles.navItem}`}>
                      {item.title}
                    </NavBar.Brand>
                  </Link>
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
