import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Input from "../Shared/Input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Login.module.css";
import ReactDOM from "react-dom";
import googleLogo from "../../assets/google-logo.svg";
import facebookLogo from "../../assets/facebook-logo.svg";
import githubLogo from "../../assets/github-logo.svg";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [loading, setLoading] = useState(false);

  const { logIn, signInWithGoogle, signInWithFacebook, signInWithGithub } =
    useAuth();
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

    try {
      setLoading(true);
      await logIn(emailRef.current.value, passwordRef.current.value);
      history.push("/dashboard");
    } catch (error) {
      createToast(error.message);
    }

    setLoading(false);
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await signInWithGoogle();
      history.push("/dashboard");
    } catch (error) {
      createToast(error.message);
    }

    setLoading(false);
  };
  const handleFacebookSignIn = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await signInWithFacebook();
      history.push("/dashboard");
    } catch (error) {
      console.log("Error : ");
      console.log(error);
      createToast(error.message);
    }

    setLoading(false);
  };
  const handleGithubSignIn = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await signInWithGithub();
      history.push("/dashboard");
    } catch (error) {
      createToast(error.message);
    }

    setLoading(false);
  };

  return (
    <div className="form-container sign-in-container">
      <form className={styles.formbackground} onSubmit={handleSubmit}>
        <h1>Sign in</h1>

        <div>
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
            src={githubLogo}
            alt="Google Logo"
          />
        </div>

        <span>or use your account</span>
        <Input
          type="email"
          id="floatingInput"
          placeholder="name@example.com"
          label="Email"
          ref={emailRef}
        />
        <Input
          type="password"
          id="floatingPassword"
          placeholder="Password"
          label="Password"
          ref={passwordRef}
        />
        <div className="w-100 text-center mt-2 mb-2">
          <Link to="/forgot-password">Forgot Password ?</Link>
        </div>
        <button className={styles.button} disabled={loading}>
          Sign In
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

export default Login;
