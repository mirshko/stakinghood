import { Text } from "rebass";
import styled from "styled-components";

const Tag = styled(Text)`
  align-items: center;
  border-radius: 5px;
  display: inline-flex;
  text-transform: uppercase;
  letter-spacing: 0.64px;
  font-size: 16px;
  background-color: var(--brand);
  font-weight: var(--weight-medium);
  height: ${props => (props.tall ? "30px" : "24px")};
  padding: 1px 8px 0;
  color: #fff;
`;

export default Tag;
