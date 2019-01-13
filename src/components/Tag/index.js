import React from "react";
import { Text as RebassText } from "rebass";
import styled from "styled-components";

const Text = styled(RebassText)`
  align-items: center;
  border-radius: 5px;
  display: inline-flex;
  text-transform: uppercase;
  letter-spacing: 0.64px;
  background-color: var(--brand);
  font-weight: var(--weight-medium);
  height: ${props => (props.tall ? "30px" : "24px")};
  padding: 1px 8px 0;
  color: #fff;
`;

const Tag = props => (
  <Text {...props} fontSize={2}>
    {props.children}
  </Text>
);

export default Tag;
