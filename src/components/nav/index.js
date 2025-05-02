import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useRouter } from "next/router";
import { Logo } from "components/logo";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHamburger,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const menu = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "About",
    link: "/about",
    items: [
      { text: "Our Journey", link: "/journey" },
      { text: "Our mission", link: "/mission" },
      { text: "Our vision", link: "/vision" },
      { text: "Lead minister", link: "/lead-minister" },
      { text: "Statement of faith ", link: "/statement-of-faith" },
    ],
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
  const { pathname } = useRouter();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      sticky="top"
      className="bg-light border-bottom"
    >
      <Container fluid="md">
        <Navbar.Brand href="/">
          <Logo />
        </Navbar.Brand>
        <Button
          variant="outline-primary"
          className="d-md-none"
          onClick={handleShow}
        >
          <FontAwesomeIcon icon={faBars} />
        </Button>
        <Offcanvas
          show={show}
          onHide={handleClose}
          responsive="md"
          placement="end"
        >
          <Offcanvas.Header className="justify-content-end pt-4 pe-2">
            <Button variant="outline-primary" onClick={handleClose}>
              <FontAwesomeIcon size="lg" icon={faTimes} />
            </Button>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav variant="" className="ms-2 m-md-0">
              {menu?.map(({ link, text, items = [] }, index) => {
                const isActive =
                  link === pathname ||
                  (items.length && items.some((i) => i.link === pathname));

                if (items.length) {
                  return (
                    <NavDropdown
                      key={index}
                      title={text}
                      id="basic-nav-dropdown"
                      active={isActive}
                    >
                      {items.map((i, idx) => (
                        <NavDropdown.Item
                          key={idx}
                          as={Link}
                          href={i.link}
                          active={i.link === pathname}
                          onClick={handleClose}
                        >
                          {i.text}
                        </NavDropdown.Item>
                      ))}
                    </NavDropdown>
                  );
                }
                return (
                  <Nav.Link
                    active={isActive}
                    as={Link}
                    key={index}
                    href={link}
                    onClick={handleClose}
                  >
                    {text}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
};
