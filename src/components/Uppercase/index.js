import React from "react";
import { Text as RebassText } from "rebass";
import styled from "styled-components";

const Text = styled(RebassText)`
  text-transform: uppercase;
  color: var(--cosmos-brand-transparent);
  letter-spacing: 0.32px;
  font-weight: var(--weight-semibold);
`;

const Uppercase = props => <Text {...props}>{props.children}</Text>;

export default Uppercase;
