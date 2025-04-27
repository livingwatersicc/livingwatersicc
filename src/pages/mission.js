import { Banner } from "components/banner";
import React from "react";
import { Mission } from "scenes/about/mission";

const OurMission = () => {
  return (
    <>
      <Banner
        image={"church-tower.jpg"}
        title={"Our mission"}
        isResponsive
        position="top"
      />
      <Mission />
    </>
  );
};

export default OurMission;
