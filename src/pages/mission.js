import { Banner } from "components/banner";
import { Mission } from "scenes/about/mission";

const OurMission = () => {
  return (
    <>
      <Banner
        image={"water-cross.png"}
        title={"Our mission"}
        isResponsive
        position="top"
      />
      <Mission />
    </>
  );
};

export default OurMission;
