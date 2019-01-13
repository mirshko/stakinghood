import React from "react";
import { Box, Text } from "rebass";
import PropTypes from "prop-types";

import UnstyledButton from "../UnstyledButton";

export const TabContent = ({ children }) => (
  <Box px={[3, 4]} pt={[3, 4]} pb={3}>
    {children}
  </Box>
);

TabContent.propTypes = {
  children: PropTypes.node.isRequired
};

export const Tab = ({ active, onClick, children }) => {
  const activeColor = active ? "var(--brand)" : "transparent";

  return (
    <UnstyledButton disabled={active} onClick={onClick}>
      <Text
        pt={3}
        pb={16 - 2}
        fontWeight="var(--weight-semibold)"
        textAlign="center"
        style={{
          borderBottom: `2px solid ${activeColor}`
        }}
      >
        {children}
      </Text>
    </UnstyledButton>
  );
};

Tab.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};
