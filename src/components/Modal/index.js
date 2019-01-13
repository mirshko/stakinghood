import React from "react";
import { Dialog } from "@reach/dialog";
import PropTypes from "prop-types";
import { Flex } from "rebass";

import UnstyledButton from "../UnstyledButton";

import "@reach/dialog/styles.css";
import "./index.css";
import Uppercase from "../Uppercase";

const Modal = ({ children, onClick }) => (
  <Dialog>
    {children}
    <Flex justifyContent="center" alignItems="center" pb={3}>
      <UnstyledButton width="initial" onClick={onClick}>
        <Uppercase color="var(--brand)">Close</Uppercase>
      </UnstyledButton>
    </Flex>
  </Dialog>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Modal;
