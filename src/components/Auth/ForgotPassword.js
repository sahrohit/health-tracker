import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Input from "../Shared/Input";
import styles from "./ForgotPassword.module.css";
import { ToastContainer, toast } from "react-toastify";
import ReactDOM from "react-dom";

const ForgotPassword = () => {
  const emailRef = useRef();
  const [loading, setLoading] = useState(false);

  const { resetPassword } = useAuth();
  const history = useHistory();

  const createErrorToast = (message) => {
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

  const createSuccessToast = (message) => {
    toast.success(message, {
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
      await resetPassword(emailRef.current.value);
      createSuccessToast("Check you inbox");
      setTimeout(() => {
        history.push("/auth");
      }, 5000);
    } catch (error) {
      createErrorToast(error.message);
    }

    setLoading(false);
  };
  return (
    <div className={`w-100 ${styles.container}`} style={{ maxWidth: "800px" }}>
      <div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1 className={styles.title}>Forgot Password</h1>

          <Input
            type="email"
            id="floatingInput"
            placeholder="name@example.com"
            label="Email"
            ref={emailRef}
          />
          <div className="w-100 text-center mt-2 mb-2">
            <Link to="/auth">Back to Login ?</Link>
          </div>
          <button className={styles.button} disabled={loading} type="submit">
            Reset my Password
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
    </div>
  );
};

export default ForgotPassword;
