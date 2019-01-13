import React from "react";
import { Text } from "rebass";

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

export default EmptyState;
