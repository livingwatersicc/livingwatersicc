import React from "react";
import { Map } from "components/map";
import styles from "./contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { Word } from "components/verse";
import Obfuscate from "react-obfuscate";

export const ContactMap = () => {
  return (
    <div className={styles.container}>
      <div className={styles.map}>
        <Map />
      </div>
      <div className={styles.content}>
        <div className={styles.details}>
          <Word verse={"Matthew 7:7"}>
            “Ask and it will be given to you; seek and you will find; knock and
            the door will be opened to you.
          </Word>
          <div className="lead text-primary">
            Living Waters International Christian Church
          </div>
          <div>
            <FontAwesomeIcon icon={faMapMarker} /> Church of Christ building, 1
            Saint Andrew Street Dunedin.
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} /> info.lwicc@gmail.com
          </div>
          <div>
            <FontAwesomeIcon icon={faPhone} /> +64 012 345 6789
          </div>
          <div className={"mt-3"}>
            <p>For Enquires or plan a visit, please email us.</p>
            <Button
              variant="outline-primary"
              as={Obfuscate}
              email="mailto:info.lwicc@gmail.com"
            >
              Email
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
