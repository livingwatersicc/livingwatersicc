import { Image } from "react-bootstrap";

import styles from "./banner.module.scss";

export const Banner = ({
  image,
  title,
  subtitle,
  isResponsive = false,
  position = "top",
}) => {
  const _position = styles.hasOwnProperty(position) ? styles[position] : "";

  return (
    <div
      className={`${styles.container} ${isResponsive ? styles.responsive : ""}`}
    >
      <Image
        src={image}
        alt="banner image"
        className={`${styles.image} ${_position}`}
      />
      <div className={styles.content}>
        <div className={styles.text}>
          <div className={"display-5 mb-3"}>{title}</div>
          {subtitle && <div className={"lead"}>{subtitle}</div>}
        </div>
      </div>
    </div>
  );
};
