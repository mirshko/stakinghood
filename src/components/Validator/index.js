import React from "react";
import { Box as RebassBox, Flex as RebassFlex, Text } from "rebass";
import styled from "styled-components";
import PropTypes from "prop-types";
import Tag from "../Tag";
import UnstyledButton from "../UnstyledButton";

const ValidatorIcon = styled(RebassBox)`
  height: 40px;
  width: 40px;
  border-radius: calc(40px / 2);
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  font-size: 24px;
`;

const formatter = num => (num > 999 ? (num / 1000).toFixed(1) + "K" : num);

const Flex = styled(RebassFlex)`
  ${props =>
    props.bottomBorder ? `border-bottom: 1px solid var(--brand-light);` : null}
`;

const Validator = ({
  symbol,
  name,
  color,
  emoji,
  totalStake,
  onClick,
  bondedStake,
  uptime,
  bottomBorder
}) => (
  <UnstyledButton onClick={onClick}>
    <Flex
      bottomBorder={bottomBorder}
      pt={20}
      pb={20 - 1}
      justifyContent="space-between"
      alignItems="center"
    >
      <RebassFlex>
        <ValidatorIcon bg={color}>{emoji}</ValidatorIcon>
        <RebassBox ml="8px">
          <Text
            title={name}
            lineHeight="24px"
            fontSize="16px"
            fontWeight="var(--weight-medium)"
          >
            {symbol}
          </Text>
          <Text lineHeight="12px" fontSize="12px">
            {formatter(totalStake)} ATOM
          </Text>
        </RebassBox>
      </RebassFlex>
      <Tag tall>
        {bondedStake ? `${formatter(bondedStake)} ATOM` : `${uptime}%`}
      </Tag>
    </Flex>
  </UnstyledButton>
);

Validator.defaultProps = {
  color: "#000",
  emoji: "📟",
  bottomBorder: true
};

Validator.propTypes = {
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string,
  color: PropTypes.string,
  emoji: PropTypes.string,
  totalStake: PropTypes.number.isRequired,
  bondedStake: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  uptime: PropTypes.number,
  bottomBorder: PropTypes.bool
};

export default Validator;
