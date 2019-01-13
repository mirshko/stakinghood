import React from "react";
import { Dialog as ReachDialog } from "@reach/dialog";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Flex } from "rebass";

import UnstyledButton from "../UnstyledButton";

import "@reach/dialog/styles.css";
import "./index.css";
import Uppercase from "../Uppercase";

const Dialog = styled(ReachDialog)`
  border-radius: 8px;
  box-shadow: rgba(94, 111, 243, 0.16) 0px 48px 80px,
    rgba(22, 25, 49, 0.16) 0px 16px 32px, rgba(22, 25, 49, 0.08) 0px 6px 16px;
`;

const Modal = ({ children, onClose }) => (
  <Dialog>
    {children}
    <Flex justifyContent="center" alignItems="center" pb={3}>
      <UnstyledButton width="initial" onClick={onClose}>
        <Uppercase color="var(--brand)">Close</Uppercase>
      </UnstyledButton>
    </Flex>
  </Dialog>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Modal;
