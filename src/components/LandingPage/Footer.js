import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
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
  );
};

export default Footer;
