import React, { useContext } from "react";
import styles from "./Footer.module.css";
import { ThemeContext } from "../../theme";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`${styles.footer} ${theme === "dark" ? styles.dark : ""}`}>
      <div className={styles.footerContent}>
        <p>© 2023 Invoice Portal. All rights reserved.</p>
        <p>Contact: jayakumar04444@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;