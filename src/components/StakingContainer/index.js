import { Container } from "unstated";

import data from "../../data.json";

class StakingContainer extends Container {
  state = {
    liquidStake: 10843,
    validators: data
  };

  decrementLiquidStake(amount) {
    this.setState(prevState => ({
      liquidStake: (prevState.liquidStake -= amount)
    }));
  }

  incrementLiquidStake(amount) {
    this.setState(prevState => ({
      liquidStake: (prevState.liquidStake += amount)
    }));
  }

  increaseValidatorStake(index, amount) {
    let validators = [...this.state.validators];

    validators[index].bondedStake += amount;

    this.setState({ validators });
  }

  decreaseValidatorStake(index, amount) {
    let validators = [...this.state.validators];

    validators[index].bondedStake -= amount;

    this.setState({ validators });
  }
}

export default StakingContainer;
