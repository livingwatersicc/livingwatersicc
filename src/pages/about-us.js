import { Title } from "components/typography";
import { Journey } from "scenes/about/journey";
import { Mission } from "scenes/about/mission";
import { Vision } from "scenes/about/vision";

const About = () => {
  return (
    <>
      <Title>About us</Title>

      <Journey />

      <div className="bg-light">
        <Vision />
      </div>

      <Mission />
    </>
  );
};

export default About;
