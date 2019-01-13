import { Text } from "rebass";
import styled from "styled-components";

const Uppercase = styled(Text)`
  text-transform: uppercase;
  color: ${props => (props.color ? props.color : "var(--brand-opaque)")};
  letter-spacing: 0.32px;
  font-weight: var(--weight-semibold);
`;

export default Uppercase;
