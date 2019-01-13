import React from "react";
import { Text } from "rebass";
import PropTypes from "prop-types";

const EmptyState = ({ children }) => (
  <Text
    py={20}
    fontSize={[1, 2]}
    textAlign="center"
    color="var(--brand-opaque)"
  >
    {children}
  </Text>
);

EmptyState.propTypes = {
  children: PropTypes.node.isRequired
};

export default EmptyState;
