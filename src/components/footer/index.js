import styles from "./footer.module.scss";
import { Wrapper } from "components/wrapper";

export const Footer = () => {
  return (
    <Wrapper>
      <div className={styles.footer}>
        Copyright © {new Date().getFullYear()} Living Waters International
        Christian Christ®. All rights reserved.
      </div>
    </Wrapper>
  );
};
