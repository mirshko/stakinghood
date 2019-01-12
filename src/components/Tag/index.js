import React from "react";
import { Box as RebassBox } from "rebass";
import styled from "styled-components";

const Box = styled(RebassBox)`
  align-items: center;
  border-radius: 5px;
  display: inline-flex;
  text-transform: uppercase;
  letter-spacing: 0.64px;
  font-weight: var(--weight-medium);
  height: 24px;
  padding: 1px 8px 0;
`;

const Tag = props => (
  <Box bg="var(--cosmos-brand)" color="white" {...props} fontSize={2}>
    {props.children}
  </Box>
);

export default Tag;
