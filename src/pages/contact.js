import { Banner } from "components/banner";
import { Map } from "components/map";
import { Container } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <Banner image={"water-church.jpg"} title={"Contact us"} isResponsive />
      <Container>
        <Map />
      </Container>
    </>
  );
};

export default Contact;
