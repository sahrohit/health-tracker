import React, { useEffect } from "react";
import styles from "./LandingPage.module.css";

import Navbar from "./Navbar";
import Header from "./Header";
import Feature from "./Feature";

import KUTE from "kute.js";
import Footer from "./Footer";

const LandingPage = () => {
  useEffect(() => {
    const tween = KUTE.fromTo(
      "#blob1",
      { path: "#blob1" },
      { path: "#blob2" },
      { repeat: 999, duration: 3000, yoyo: true }
    ).start();
  });

  return (
    <main>
      <Navbar />
      <Header />
      <div className={`${styles.spacer} ${styles.layer1}`}></div>
      <Feature />
      <div className={`${styles.spacer} ${styles.layer2} ${styles.flip}`}></div>
      <Footer />
    </main>
  );
};

export default LandingPage;
