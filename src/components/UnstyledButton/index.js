import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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

UnstyledButton.propTpes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  width: PropTypes.string
};

export default UnstyledButton;
