import React from "react";
import styles from "./LandingPage.module.css";

import Navbar from "./Navbar";
import Header from "./Header";
import Feature from "./Feature";

const LandingPage = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <Feature />
      <footer>
        <div class={styles.footerRow}>
          <div className={styles.footerDiv}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              earum dolorem, sint ipsa hic id cumque dolores neque itaque
              aspernatur!
            </p>
          </div>
          <div className={styles.footerDiv}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              earum dolorem, sint ipsa hic id cumque dolores neque itaque
              aspernatur!
            </p>
          </div>
          <div className={styles.footerDiv}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              earum dolorem, sint ipsa hic id cumque dolores neque itaque
              aspernatur!
            </p>
          </div>
        </div>
        <div>
          <p style={{ padding: "20px", textAlign: "center" }}>
            give copyright text here or whatever
          </p>
        </div>
      </footer>
    </main>
  );
};

export default LandingPage;
