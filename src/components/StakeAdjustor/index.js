import React, { useState } from "react";
import { Subscribe } from "unstated";
import styled from "styled-components";
import { Flex, Text, Box, Button as RebassButton } from "rebass";
import { useInput } from "react-hanger";

import StateContainer from "../StateContainer";
import UnstyledButton from "../UnstyledButton";

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

const Input = styled.input`
  width: 100%;
  margin: 24px 0;
  padding: 12px 16px;
  border-radius: 4px;
  border: none;
  line-height: 1.5;
  font-size: 16px;
  background-color: var(--brand-light);
  color: #000;

  ::placeholder {
    color: #000;
  }
`;

const TabContent = props => (
  <Box px={[3, 4]} pt={[3, 4]} pb={3} {...props}>
    {props.children}
  </Box>
);

const Tab = ({ active, onClick, children }) => {
  const activeColor = active ? "var(--brand)" : "transparent";

  return (
    <UnstyledButton disabled={active} onClick={onClick}>
      <Text
        pt={3}
        pb={16 - 2}
        fontWeight="var(--weight-semibold)"
        textAlign="center"
        style={{
          borderBottom: `2px solid ${activeColor}`
        }}
      >
        {children}
      </Text>
    </UnstyledButton>
  );
};

const StakeAdjustor = ({ index }) => {
  const supplyInput = useInput(0);
  const withdrawInput = useInput(0);
  const [tab, setTab] = useState(0);

  return (
    <Subscribe to={[StateContainer]}>
      {app => (
        <>
          {/* Tabs */}
          <Flex justifyContent="space-between">
            <Tab active={tab === 0 ? true : false} onClick={() => setTab(0)}>
              Supply
            </Tab>
            <Tab active={tab === 1 ? true : false} onClick={() => setTab(1)}>
              Withdraw
            </Tab>
          </Flex>

          {/* Tabs Content */}
          {tab === 0 ? (
            <TabContent>
              <Flex justifyContent="space-between">
                <Text fontWeight="var(--weight-medium)">Liquid Stake</Text>
                <Text fontWeight="var(--weight-medium)">
                  {app.state.liquidStake.toLocaleString()} ATOM
                </Text>
              </Flex>

              <form
                onSubmit={e => {
                  e.preventDefault();

                  app.decrementLiquidStake(parseInt(supplyInput.value, 10));
                  app.increaseValidatorStake(
                    index,
                    parseInt(supplyInput.value, 10)
                  );
                }}
              >
                <Input
                  required
                  min={0}
                  placeholder="Amount in ATOM"
                  type="number"
                  onChange={supplyInput.onChange}
                />

                <Button
                  width={1}
                  type="submit"
                  disabled={
                    supplyInput.value > app.state.liquidStake ? true : false
                  }
                >
                  {supplyInput.value > app.state.liquidStake
                    ? "Insufficient Liquid Stake"
                    : "Supply Stake"}
                </Button>
              </form>
            </TabContent>
          ) : (
            <TabContent>
              <Flex justifyContent="space-between">
                <Text fontWeight="var(--weight-medium)">Bonded Stake</Text>
                <Text fontWeight="var(--weight-medium)">
                  {app.state.validators[index].bondedStake.toLocaleString()}{" "}
                  ATOM
                </Text>
              </Flex>

              <form
                onSubmit={e => {
                  e.preventDefault();

                  app.incrementLiquidStake(parseInt(withdrawInput.value, 10));
                  app.decreaseValidatorStake(
                    index,
                    parseInt(withdrawInput.value, 10)
                  );
                }}
              >
                <Input
                  required
                  min={0}
                  type="number"
                  placeholder="Amount in ATOM"
                  onChange={withdrawInput.onChange}
                />

                <Button
                  width={1}
                  type="submit"
                  disabled={
                    withdrawInput.value >
                    app.state.validators[index].bondedStake
                      ? true
                      : false
                  }
                >
                  {withdrawInput.value > app.state.validators[index].bondedStake
                    ? "Insufficient Bonded Stake"
                    : "Widthdraw Stake"}
                </Button>
              </form>
            </TabContent>
          )}
        </>
      )}
    </Subscribe>
  );
};

export default StakeAdjustor;
