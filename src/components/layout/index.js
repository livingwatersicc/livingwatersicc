import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavMenu } from "components/nav";

export const Layout = ({ children }) => {
  if (typeof window !== "undefined") {
    return null;
  }
  return (
    <Container>
      <NavMenu />
      <Row>
        <Col>1 of 1</Col>
      </Row>
      {children}
    </Container>
  );
};
