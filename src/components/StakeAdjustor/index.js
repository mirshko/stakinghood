import React, { useState } from "react";
import { Subscribe } from "unstated";
import { Flex, Text } from "rebass";
import { useInput } from "react-hanger";
import PropTypes from "prop-types";

import StateContainer from "../StateContainer";
import Button from "../Button";
import { Tab, TabContent } from "../Tabs";
import Input from "../Input";

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

StakeAdjustor.propTypes = {
  index: PropTypes.number.isRequired
};

export default StakeAdjustor;
