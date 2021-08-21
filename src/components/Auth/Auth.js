import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import styles from "./Auth.module.css";

import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router";

const Auth = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const history = useHistory();
  const { currentUser } = useAuth();

  if (currentUser) {
    history.push("/dashboard");
  }
  return (
    <div
      id="container"
      className={`w-100 ${styles.container}`}
      style={{ maxWidth: "800px" }}
    >
      <div class={`container ${showSignUp && "right-panel-active"}`}>
        <SignUp />
        <Login />

        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                class="ghost"
                className={styles.button}
                onClick={() => {
                  setShowSignUp(false);
                }}
              >
                Sign In
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                class="ghost"
                className={styles.button}
                onClick={() => {
                  setShowSignUp(true);
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
