import React from "react";
import styles from "./Feature.module.css";

import logo from "../../assets/logo.png";

const Feature = () => {
  return (
    <section>
      <div className={styles.contentRowOne}>
        <div className={styles.flexboxContentContainer}>
          <div className={styles.itemBox}>
            <img src={logo} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              nobis.
            </p>
          </div>
          <div className={styles.itemBox}>
            <img src={logo} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              nobis.
            </p>
          </div>
          <div className={styles.itemBox}>
            <img src={logo} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              nobis.
            </p>
          </div>
          <div className={styles.itemBox}>
            <img src={logo} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              nobis.
            </p>
          </div>
          <div className={styles.itemBox}>
            <img src={logo} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              nobis.
            </p>
          </div>
          <div className={styles.itemBox}>
            <img src={logo} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              nobis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
