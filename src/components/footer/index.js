import styles from "./footer.module.scss";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";

export const Footer = () => {
  return (
    <Container className="ps-5 pe-5">
      <div className={styles.footer}>
        Copyright © {new Date().getFullYear()} Living Waters International
        Church of Christ®. All rights reserved.
      </div>
    </Container>
  );
};
