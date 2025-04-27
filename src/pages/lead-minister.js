import { Banner } from "components/banner";
import React from "react";
import { Minister } from "scenes/about/minister";
const LeadMinister = () => {
  return (
    <>
      <Banner
        image={"minister.jpg"}
        title={"Lead minister"}
        isResponsive
        position="center"
      />
      <Minister />
    </>
  );
};

export default LeadMinister;
