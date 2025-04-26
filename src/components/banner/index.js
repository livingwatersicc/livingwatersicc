import Card from "react-bootstrap/Card";
import { Image } from "react-bootstrap";

import styles from "./banner.module.scss";

export const Banner = () => {
  return (
    <div className={styles.container}>
      <Image src="sea.jpg" alt="Card image" className={styles.image} />
      <div className={styles.content}>
        <div className={styles.text}>
          <div className={"display-5 mb-3"}> Revelation 22:17</div>
          <div className={"lead"}>
            The Spirit and the bride say, “Come!” And let the one who hears say,
            “Come!” Let the one who is thirsty come; and let the one who wishes
            take the free gift of the water of life.
          </div>
        </div>
      </div>
    </div>
  );
};
