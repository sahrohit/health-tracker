import React, { useState } from "react";
import styles from "./Navbar.module.css";

import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className={styles.navContainer}>
        <a href="/" id={styles.logo}>
          <img src={logo} alt="" />
          <span>Stay Healthy</span>
        </a>
        <div
          className={`${styles.menuBTN} ${menuOpen && styles.open}`}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <div className={styles.burgerMenu}></div>
        </div>
        <ul id={styles.navUL} className={`${menuOpen && styles.show}`}>
          <li>
            <a href="/" className={styles.HomeMadeBurger}>
              Home
            </a>
          </li>
          <li>
            <a href="http://www.google.com">About</a>
          </li>
          <li>
            <a href="/exercise">Exercise</a>
          </li>
          <li>
            <a href="http://www.google.com">Contact</a>
          </li>
          <li>
            <a href="/auth" id={styles.signIN}>
              Sign in
            </a>
          </li>
          <li className={styles.signUP}>
            <a href="/dashboard" id={styles.signUP}>
              Dashboard
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
