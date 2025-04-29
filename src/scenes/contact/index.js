import React from "react";
import { Map } from "components/map";
import styles from "./contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Stack } from "react-bootstrap";
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
          <div className="lead fw-normal text-primary">
            Living Waters International Christian Church
          </div>
          <Stack>
            <div>Church of Christ building</div>
            <div>1 Saint Andrew Street</div>
            <div>Dunedin.</div>
          </Stack>
          <Stack direction="horizontal" gap={3}>
            <Stack className="small" direction="horizontal" gap={2}>
              <FontAwesomeIcon icon={faEnvelope} />
              info.lwicc@gmail.com
            </Stack>
            <Stack className="small" direction="horizontal" gap={2}>
              <FontAwesomeIcon icon={faPhone} />
              +64 012 345 6789
            </Stack>
          </Stack>
          <div>
            <div>For Enquires or plan a visit, please email us.</div>
            <Button
              className="mt-2"
              variant="outline-dark"
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
