import React from "react";
import styles from "./DataCard.module.css";

const DataCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>This is a very long title</h2>
        <p>Date : 21st Aug 2021</p>
      </div>
      <div className={styles.details}>
        <h2>Duration : 3hrs</h2>
        <h3>Count : 69</h3>
      </div>
    </div>
  );
};

export default DataCard;
