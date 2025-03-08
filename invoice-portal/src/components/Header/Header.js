import React, { useState, useContext } from "react";
import styles from "./Header.module.css";
import { ThemeContext } from "../../theme";

const Header = ({ scrollToSection }) => {
  const [activeTab, setActiveTab] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    scrollToSection(tab); // Call scrollToSection function
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${styles.header} ${theme === "dark" ? styles.dark : ""}`}>
      <div className={styles.headerContent}>
        <button className={styles.menuButton} onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
          <ul>
            {["Home", "Generator", "InvoiceGuide", "AboutUs"].map((tab) => (
              <li
                key={tab}
                className={`${styles.tab} ${activeTab === tab ? styles.active : ""}`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>
        </nav>
        <button className={styles.themeToggle} onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
};

export default Header;