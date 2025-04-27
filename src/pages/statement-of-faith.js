import { Banner } from "components/banner";
import { Statements } from "scenes/statement";

const Statement = () => {
  return (
    <>
      <Banner
        image={"bible-leaf.jpg"}
        title={"Statement of faith"}
        isResponsive
        position="center"
      />
      <Statements />
    </>
  );
};

export default Statement;
