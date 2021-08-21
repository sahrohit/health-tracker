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
        <div className={`${styles.menuBTN} ${menuOpen && styles.open}`}>
          <div
            className={styles.burgerMenu}
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          ></div>
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
            <a href="http://www.google.com">Services</a>
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
            <a href="/auth" id={styles.signUP}>
              Sign up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
