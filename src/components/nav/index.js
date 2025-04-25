import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./nav.module.css";
import Link from "next/link";
const menu = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "About us",
    link: "/about-us",
  },
  {
    text: "Services",
    link: "/services",
  },
  {
    text: "Contact",
    link: "/contact",
  },
];

export const NavMenu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="ligth" variant="ligth">
      <Container>
        <Navbar.Brand href="#home">Living waters</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            {menu.map((item, index) => (
              <Nav.Link as={Link} key={index} href={item.link}>
                {item.text}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
