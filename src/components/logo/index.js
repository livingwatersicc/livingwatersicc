import Image from "react-bootstrap/Image";
import styles from "./logo.module.scss";

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image src={"/logo.png"} alt="logo" height={"70px"} />
      <div className={styles.text}>
        <div className={styles.first}>Living Waters</div>
        <div className={styles.second}>International Christian Church</div>
      </div>
    </div>
  );
};
