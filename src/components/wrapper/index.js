import React from "react";
import Container from "react-bootstrap/Container";

export const Wrapper = ({ children, isGrayBg = false, className = "p-5" }) => {
  return (
    <div className={isGrayBg ? "bg-light" : ""}>
      <Container className={className}>{children}</Container>
    </div>
  );
};
