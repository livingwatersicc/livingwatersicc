import { Banner } from "components/banner";
import { Map } from "components/map";
import { Wrapper } from "components/wrapper";

const Contact = () => {
  return (
    <>
      <Banner image={"water-church.jpg"} title={"Contact us"} isResponsive />
      <Wrapper className="">
        <Map />
      </Wrapper>
    </>
  );
};

export default Contact;
