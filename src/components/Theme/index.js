import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  Heading: {
    fontWeight: "var(--weight-semibold)"
  }
};

export default props => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);
