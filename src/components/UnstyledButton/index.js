import React from "react";

import styles from "./index.module.css";

const UnstyledButton = ({ onClick, children }) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
);

export default UnstyledButton;
