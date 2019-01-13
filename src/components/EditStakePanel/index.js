import React from "react";
import { Subscribe } from "unstated";

import StakingContainer from "../StakingContainer";

const EditStakePanel = ({ index, onClose }) => (
  <Subscribe to={[StakingContainer]}>
    {staking => (
      <>
        <button onClick={onClose}>Close Panel</button>
        <pre>
          <code>
            {JSON.stringify(staking.state.validators[index], null, 2)}
          </code>
        </pre>
        <button
          onClick={() => {
            staking.decrementLiquidStake(1000);
            staking.increaseValidatorStake(index, 1000);
          }}
        >
          Commit 1000 Stake
        </button>
        <button
          onClick={() => {
            staking.incrementLiquidStake(1000);
            staking.decreaseValidatorStake(index, 1000);
          }}
        >
          Withdraw 1000 Stake
        </button>
      </>
    )}
  </Subscribe>
);

export default EditStakePanel;
