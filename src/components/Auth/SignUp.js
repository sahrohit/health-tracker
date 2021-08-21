import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

import Input from "../Shared/Input";
import styles from "./SignUp.module.css";

// import googleLogo from "../../assets/google-logo.svg";
// import facebookLogo from "../../assets/facebook-logo.svg";
// import linkedinLogo from "../../assets/linkedin-logo.svg";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const [loading, setLoading] = useState(false);

  const { signUp } = useAuth();
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return createToast("Password do not match");
    }

    try {
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch (error) {
      createToast(error.message);
    }

    setLoading(false);
  };
  return (
    <div className="form-container sign-up-container">
      <form className={styles.formbackground} onSubmit={handleSubmit}>
        <h1>Create Account</h1>

        {/* <div>
          <img
            onClick={handleGoogleSignIn}
            className={styles.social}
            src={googleLogo}
            alt="Google Logo"
          />
          <img
            onClick={handleFacebookSignIn}
            className={styles.social}
            src={facebookLogo}
            alt="Google Logo"
          />
          <img
            onClick={handleGithubSignIn}
            className={styles.social}
            src={linkedinLogo}
            alt="Google Logo"
          />
        </div> */}

        <span>or use your email for registration</span>

        <Input
          type="email"
          id="floatingInput"
          placeholder="Rejina Phalange"
          label="Email"
          ref={emailRef}
        />
        <Input
          type="password"
          id="floatingEmail"
          placeholder="name@example.com"
          label="Password"
          ref={passwordRef}
        />
        <Input
          type="password"
          id="floatingPassword"
          placeholder="Confirm Password"
          label="Confirm Password"
          ref={passwordConfirmRef}
        />

        <button disabled={loading} className={styles.button} type="submit">
          Sign Up
        </button>
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
      </form>
    </div>
  );
};

export default SignUp;
