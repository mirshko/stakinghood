import React, { useState } from "react";
import { Subscribe } from "unstated";
import { Flex, Text } from "rebass";
import { useInput, useBoolean } from "react-hanger";

import StakingContainer from "../StakingContainer";

const EditStakePanel = ({ index, onClose }) => {
  const supplyInput = useInput("");
  const withdrawInput = useInput("");
  const [tab, setTab] = useState(0);

  return (
    <Subscribe to={[StakingContainer]}>
      {staking => (
        <>
          <button onClick={onClose}>Close Panel</button>

          <pre>
            <code>
              {JSON.stringify(staking.state.validators[index], null, 2)}
            </code>
          </pre>

          <button onClick={() => setTab(0)}>supply</button>
          <button onClick={() => setTab(1)}>withdraw</button>

          {tab === 0 ? (
            <>
              <Flex justifyContent="space-between">
                <Text>Liquid Stake</Text>
                <Text>{staking.state.liquidStake.toLocaleString()} ATOM</Text>
              </Flex>

              <input
                type="number"
                value={supplyInput.value}
                onChange={supplyInput.onChange}
              />

              <button
                disabled={
                  supplyInput.value > staking.state.liquidStake ? true : false
                }
                onClick={() => {
                  staking.decrementLiquidStake(parseInt(supplyInput.value, 10));
                  staking.increaseValidatorStake(
                    index,
                    parseInt(supplyInput.value, 10)
                  );
                }}
              >
                {supplyInput.value > staking.state.liquidStake
                  ? "insufficient stake"
                  : "supply stake"}
              </button>
            </>
          ) : (
            <>
              <Flex justifyContent="space-between">
                <Text>Bonded Validator Stake</Text>
                <Text>
                  {staking.state.validators[index].bondedStake.toLocaleString()}{" "}
                  ATOM
                </Text>
              </Flex>

              <input
                type="number"
                value={withdrawInput.value}
                onChange={withdrawInput.onChange}
              />

              <button
                disabled={
                  withdrawInput.value >
                  staking.state.validators[index].bondedStake
                    ? true
                    : false
                }
                onClick={() => {
                  staking.incrementLiquidStake(
                    parseInt(withdrawInput.value, 10)
                  );
                  staking.decreaseValidatorStake(
                    index,
                    parseInt(withdrawInput.value, 10)
                  );
                }}
              >
                {withdrawInput.value >
                staking.state.validators[index].bondedStake
                  ? "insufficient bonded stake"
                  : "widthdraw stake"}
              </button>
            </>
          )}
        </>
      )}
    </Subscribe>
  );
};

export default EditStakePanel;
