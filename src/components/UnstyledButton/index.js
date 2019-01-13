import React from "react";
import styled from "styled-components";

const Button = styled.button`
  all: unset;
  display: block;
  cursor: pointer;
  width: ${props => (props.width ? props.width : "100%")};

  & > * {
    transition: opacity 0.125s ease;
  }

  &:hover > * {
    opacity: 0.64;
  }

  // &:focus {
  //   outline: -webkit-focus-ring-color auto 5px;
  // }
`;

const UnstyledButton = ({ onClick, children, width }) => (
  <Button width={width} onClick={onClick}>
    {children}
  </Button>
);

export default UnstyledButton;
