import React from "react";
import { Box, Card } from "rebass";
import PropTypes from "prop-types";

const PseudoPanel = ({ height }) => (
  <Card borderRadius={4} bg="white" m={10} style={{ height: height }} />
);

const Panel = ({ children }) => (
  <Card
    boxShadow={[
      "none",
      `rgba(94, 111, 243, 0.16) 0px 48px 80px,
  rgba(22, 25, 49, 0.16) 0px 16px 32px, rgba(22, 25, 49, 0.08) 0px 6px 16px`
    ]}
    borderRadius={[0, 24]}
    bg="#F5F6F9"
    mt={[0, 32]}
    mb={[0, 128]}
    style={{ overflow: "hidden" }}
  >
    <Box px={20} pt={20} pb={10} mb={10} bg="white">
      {children}
    </Box>
    <PseudoPanel height={40} />
    <PseudoPanel height={96} />
  </Card>
);

Panel.propTypes = {
  children: PropTypes.node.isRequired
};

export default Panel;
