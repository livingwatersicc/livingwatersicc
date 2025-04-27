import { Banner } from "components/banner";
import React from "react";
import { Mission } from "scenes/about/mission";
import { Vision } from "scenes/about/vision";

const OurVision = () => {
  return (
    <>
      <Banner
        image={"church-mountain.jpg"}
        title={"Our vision"}
        isResponsive
        position="bottom"
      />
      <Vision />
    </>
  );
};

export default OurVision;
