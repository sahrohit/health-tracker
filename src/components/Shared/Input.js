import React, { forwardRef } from "react";

import styles from "./Input.module.css";

const Input = forwardRef((props, ref) => {
  return (
    <div className="form-floating">
      <input
        className="inputbox"
        type={props.type}
        class={`form-control ${styles.inputbox}`}
        id={props.id}
        placeholder={props.placeholder}
        required
        ref={ref}
      />
      <label for={props.id}>{props.label}</label>
    </div>
  );
});

export default Input;
