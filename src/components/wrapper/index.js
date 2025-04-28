import React from "react";
import Container from "react-bootstrap/Container";

export const Wrapper = ({
  children,
  isGrayBg = false,
  bg = "",
  className = "p-5",
}) => {
  return (
    <div className={isGrayBg ? "bg-light" : bg}>
      <Container className={className}>{children}</Container>
    </div>
  );
};
