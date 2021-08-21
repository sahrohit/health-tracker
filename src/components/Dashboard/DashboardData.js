import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./DashboardData.module.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

const DashboardData = () => {
  const { currentUser } = useAuth();

  return (
    <>
      <div className={styles.header}>
        <div className={styles.cover}></div>
        <img
          className={styles.avatar}
          src={currentUser.photoURL || "https://picsum.photos/200/300"}
          alt="avatar"
        />
        <div id={styles.name}>
          <h1>{currentUser.displayName}</h1>
          <span>{currentUser.emailVerified && <VerifiedUserIcon />}</span>
        </div>
        {/* <div>
          <h1 className={styles.fullname}>{currentUser.displayName} </h1>

          <span id={styles.verification}>
            <abbr title="Verified Email">
              {currentUser.emailVerified && <VerifiedUserIcon />}
              Hello
            </abbr>
          </span>
        </div> */}

        <h2 className={styles.email}>{currentUser.email}</h2>
      </div>
      <div className={styles.main}>
        <div className={styles.section} id="about">
          <div className={styles.content}>
            <div className={styles.subtitle}>ABOUT</div>
            <p className={styles.desc}>
              Whatever tattooed stumptown art party sriracha gentrify hashtag
              intelligentsia readymade schlitz brooklyn disrupt.
            </p>
          </div>
          <div className={styles.social}>Socials goes here.</div>
        </div>
      </div>
    </>
  );
};

export default DashboardData;
