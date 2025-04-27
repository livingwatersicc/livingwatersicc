import { Banner } from "components/banner";
import { Title } from "components/typography";
import { Journey } from "scenes/about/journey";
import { Mission } from "scenes/about/mission";
import { Vision } from "scenes/about/vision";

const About = () => {
  return (
    <>
      <Banner
        image={"church-tower.jpg"}
        title={"About us"}
        isResponsive
        position="center"
      />
      <Journey />

      <div className="bg-light">
        <Vision />
      </div>

      <Mission />
    </>
  );
};

export default About;
