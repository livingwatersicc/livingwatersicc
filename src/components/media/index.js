import Image from "react-bootstrap/Image";

import styles from "./media.module.scss";

export const Media = ({ image, title, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={image} alt="media image" />
      </div>
      <div className={styles.text}>
        <div className="h4">{title}</div>
        <div className="fw-light">{children}</div>
      </div>
    </div>
  );
};
