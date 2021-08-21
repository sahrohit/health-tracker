import React from "react";
import styles from "./Profile.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ReactDOM from "react-dom";

import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

const Profile = () => {
  const { currentUser } = useAuth();

  const { logOut } = useAuth();

  const history = useHistory();

  const createToast = (message) => {
    toast.error(message, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleLogout = async () => {
    try {
      await logOut();
      history.push("/auth");
    } catch (error) {
      createToast("Unable to Login");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Profile</div>
      <div className={styles.picture}>
        <img
          className={styles.avatar}
          src={currentUser.photoURL || "https://picsum.photos/200/300"}
          alt="avatar"
        />
      </div>
      <div className={styles.name}>
        <h1>{currentUser.displayName}</h1>
        <p>{currentUser.email}</p>
      </div>
      <div className={styles.about}>
        <h4>About : </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          maximus aliquam nunc et convallis. Nullam id diam finibus, bibendum
          nulla efficitur, dignissim augue. Vivamus volutpat placerat massa, id
          posuere purus blandit ut.
        </p>
      </div>
      <div className={styles.update}>
        <Link to="/update-profile" className="btn btn-primary w-100">
          Update Profile
        </Link>
      </div>
      <div className={styles.logout}>
        <Button
          variant="outline-danger"
          onClick={handleLogout}
          className="w-100 text-center"
        >
          Logout
        </Button>
      </div>
      {ReactDOM.createPortal(
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />,
        document.getElementById("toast")
      )}
    </div>
  );
};

export default Profile;
