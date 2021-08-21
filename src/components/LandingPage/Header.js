import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <header>
        <div className={styles.headingText}>
          <div>
            <h1>Great Minds Think Alike.</h1>
            <p>but greater minds think beyond !</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
