import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { useRouter } from "next/router";

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
  const { pathname } = useRouter();

  return (
    <Navbar collapseOnSelect expand="md" className="pt-4 pb-4 border-bottom">
      <Container>
        <Navbar.Brand href="#home">Living waters</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav variant="">
            {menu?.map(({ link, text }, index) => (
              <Nav.Link
                active={pathname === link}
                as={Link}
                key={index}
                href={link}
              >
                {text}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
