import styles from "./map.module.scss";

export const Map = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d694.4980455668441!2d170.503354!3d-45.871466!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa82eac72d2d89327%3A0xfe45a85d2ed2d09!2s1%20Saint%20Andrew%20Street%2C%20Central%20Dunedin%2C%20Dunedin%209016!5e0!3m2!1sen!2snz!4v1745728032203!5m2!1sen!2snz"
      height="450"
      className={styles.map}
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};
