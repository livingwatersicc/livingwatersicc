import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Stack } from "react-bootstrap";
import Obfuscate from "react-obfuscate";

import { Map } from "components/map";
import { Word } from "components/verse";

import styles from "./contact.module.scss";

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
          <Stack direction="horizontal" gap={3} className="flex-wrap">
            <Stack className="small" direction="horizontal" gap={2}>
              <FontAwesomeIcon icon={faEnvelope} />
              info.lwicc@gmail.com
            </Stack>
          </Stack>
          <div>
            <div>For enquiries or to plan a visit, please email us.</div>
            <Button
              className="mt-2"
              variant="outline-dark"
              as={Obfuscate}
              email="info.lwicc@gmail.com">
              Email
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
