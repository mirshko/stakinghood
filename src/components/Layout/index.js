import React from "react";
import PropTypes from "prop-types";

import "modern-normalize";
import "typeface-inter";
import "../../styles/global.css";

import styles from "./index.module.css";
import Theme from "../Theme";

const Layout = ({ children }) => (
  <Theme>
    <div className={styles.container}>
      <div className={styles.wrapper}>{children}</div>
    </div>
  </Theme>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
