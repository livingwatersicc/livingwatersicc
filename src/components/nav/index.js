import { useState } from "react";

import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import { Logo } from "components/logo";

const menu = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "About",
    link: "/about",
    items: [
      { text: "Our vision", link: "/vision" },
      { text: "Our mission", link: "/mission" },
      { text: "Our team", link: "/team" },
      { text: "Our Journey", link: "/journey" },
      { text: "Statement of faith ", link: "/statement-of-faith" },
    ],
  },
  {
    text: "Services",
    link: "/services",
    items: [
      { text: "Our services", link: "/services" },
      { text: "What to expect", link: "/what-to-expect" },
    ],
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
      className="bg-light border-bottom">
      <Container fluid="md">
        <Navbar.Brand href="/">
          <Logo />
        </Navbar.Brand>
        <Button
          variant="outline-primary"
          className="d-md-none"
          onClick={handleShow}>
          <FontAwesomeIcon icon={faBars} />
        </Button>
        <Offcanvas
          show={show}
          onHide={handleClose}
          responsive="md"
          placement="end">
          <Offcanvas.Header className="justify-content-between border-bottom align-items-end mt-3">
            <div className="ms-3">www.livingwaterschurch.org.nz</div>
            <Button variant="outline-primary" onClick={handleClose}>
              <FontAwesomeIcon size="lg" icon={faTimes} />
            </Button>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Navbar className="align-item-start p-3" expand={false}>
              <Nav variant="" className="flex-column flex-md-row w-100">
                {menu?.map(({ link, text, items = [] }, index) => {
                  const isActive =
                    link === pathname ||
                    (items.length && items.some(i => i.link === pathname));

                  if (items.length) {
                    return (
                      <NavDropdown key={index} title={text} active={isActive}>
                        {items.map((i, idx) => (
                          <NavDropdown.Item
                            key={idx}
                            as={Link}
                            href={i.link}
                            active={i.link === pathname}
                            onClick={handleClose}>
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
                      onClick={handleClose}>
                      {text}
                    </Nav.Link>
                  );
                })}
              </Nav>
            </Navbar>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
};
