import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useRouter } from "next/router";
import { Logo } from "components/logo";

const menu = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "About",
    link: "/about",
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
    <Navbar collapseOnSelect expand="md" className="border-bottom">
      <Container>
        <Navbar.Brand href="/">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav variant="">
            {menu?.map(({ link, text }, index) => (
              <Nav.Link
                active={pathname === link}
                as={"a"}
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
