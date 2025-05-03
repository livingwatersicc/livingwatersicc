import { motion } from "motion/react";
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
      className={`${styles.container} ${isResponsive ? styles.responsive : ""}`}>
      <Image
        src={image}
        alt="banner image"
        className={`${styles.image} ${_position}`}
      />
      <div className={styles.content}>
        <div className={styles.text}>
          <motion.section
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}>
            <div className={"display-5 mb-3"}>{title}</div>
            {subtitle && <div className={"lead"}>{subtitle}</div>}
          </motion.section>
        </div>
      </div>
    </div>
  );
};
