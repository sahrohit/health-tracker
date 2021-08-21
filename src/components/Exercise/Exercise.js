import React from "react";
import Navbar from "../LandingPage/Navbar";

import styles from "./Exercise.module.css";

const Exercise = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}> This is where the main ML Model goes.</h1>
      </div>
    </>
  );
};

export default Exercise;
