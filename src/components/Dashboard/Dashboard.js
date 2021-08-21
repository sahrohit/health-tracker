import React, { useEffect } from "react";

import styles from "./Dashboard.module.css";

import Navbar from "../LandingPage/Navbar";
import Profile from "./Profile";
import Databox from "./Databox";

const Dashboard = () => {
  useEffect(() => {
    document.body.style.backgroundImage = "";
  }, []);

  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <div className={styles.profile}>
          <Profile />
        </div>
        <div className={styles.databox}>
          <Databox />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
