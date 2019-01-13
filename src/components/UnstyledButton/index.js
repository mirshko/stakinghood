import React from "react";
import styled from "styled-components";

const Button = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  appearance: none;
  background: none;
  display: inline-block;
  outline: none;
  text-align: inherit;
  cursor: pointer;

  width: ${props => (props.width ? props.width : "100%")};

  & > * {
    transition: opacity 0.125s ease;
  }

  &:hover > * {
    opacity: 0.64;
  }
`;

const UnstyledButton = ({ onClick, children, width }) => (
  <Button width={width} onClick={onClick}>
    {children}
  </Button>
);

export default UnstyledButton;
