import Container from "react-bootstrap/Container";

export const Title = ({ children }) => {
  return (
    <Container className="pt-3">
      <h2 className="text-center">{children}</h2>
    </Container>
  );
};

export const Subtitle = ({ children, className = "" }) => {
  return <h4 className={`mt-3 mb-3 ${className}`}>{children}</h4>;
};
