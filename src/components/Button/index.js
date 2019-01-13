import { Button as RebassButton } from "rebass";
import styled from "styled-components";

const Button = styled(RebassButton)`
  cursor: pointer;
  padding: 12px 0;
  font-weight: var(--weight-medium);
  background-color: var(--brand);
  transition-property: color, background-color;
  transition-timing-function: ease;
  transition-duration: 0.25s;

  &[disabled],
  &[disabled]:hover {
    cursor: not-allowed;
    color: var(--brand);
    background-color: var(--brand-light);
  }

  &:hover {
    background-color: var(--brand-hover);
  }
`;

export default Button;
