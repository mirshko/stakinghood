import React from "react";
import { Box as RebassBox } from "rebass";
import styled from "styled-components";
import PropTypes from "prop-types";

const Box = styled(RebassBox)`
  box-shadow: rgba(94, 111, 243, 0.16) 0px 50px 100px,
    rgba(22, 25, 49, 0.16) 0px 15px 35px, rgba(22, 25, 49, 0.08) 0px 5px 15px;
  border-radius: 10px;
`;

const Panel = ({ children }) => (
  <Box mt={[0, 32]} p={[20, 32]}>
    {children}
  </Box>
);

Panel.propTypes = {
  children: PropTypes.node.isRequired
};

export default Panel;
