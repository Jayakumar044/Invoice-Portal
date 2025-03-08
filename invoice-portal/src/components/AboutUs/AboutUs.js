import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.about} id="AboutUs">
      <h2>About Us</h2>
      <div className={styles.content}>
        <p>
          This project is a React-based invoice generation portal designed to simplify the process of creating and managing invoices.
        </p>
        <p>
          Developed with by <span className={styles.name}>JAYAKUMAR S.</span>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;