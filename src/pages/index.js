import React from "react";
import { Heading, Text, Box } from "rebass";
import { Provider, Subscribe } from "unstated";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Uppercase from "../components/Uppercase";
import Panel from "../components/Panel";
import Validator from "../components/Validator";
import StakingContainer from "../components/StakingContainer";
import EditStakePanel from "../components/EditStakePanel";
import Tag from "../components/Tag";
import UnstyledButton from "../components/UnstyledButton";

const ATOMUSDValue = 5;

class IndexPage extends React.Component {
  state = {
    panelOpen: false,
    activeIndex: 0
  };

  openPanel = () => this.setState({ panelOpen: true });
  closePanel = () => this.setState({ panelOpen: false });

  updateActiveIndex = index => this.setState({ activeIndex: index });

  renderPanel() {
    if (this.state.panelOpen) {
      return (
        <EditStakePanel
          onClose={() => this.closePanel()}
          index={this.state.activeIndex}
        />
      );
    }
  }

  render() {
    return (
      <Subscribe to={[StakingContainer]}>
        {staking => {
          const watchedValidators = staking.state.validators.filter(
            validator => validator.bondedStake <= 0
          ).sort((val1, val2) => val1.uptime + val2.uptime);

          const stakeValue = (
            staking.state.validators
              .map(validator => validator.bondedStake)
              .reduce((sum, value) => sum + value) * ATOMUSDValue
          ).toLocaleString(undefined, { minimumFractionDigits: 2 });

          return [
            <Layout>
              <SEO />
              <Panel>
                <Heading mt={[0, 4]} mb="4px" fontSize={[4, 5]} as="h1">
                  Staking
                </Heading>

                {/* Current Value Of My Stake */}
                <Text
                  mb={16}
                  fontSize={[4, 5]}
                  fontWeight="var(--weight-semibold)"
                >
                  ${stakeValue}
                </Text>

                {/* Liquid Stake */}
                <Box mb={40}>
                  <Tag>LIQUID STAKE</Tag>{" "}
                  <Text as="span" fontWeight="var(--weight-semibold)">
                    {staking.state.liquidStake.toLocaleString()} ATOM
                  </Text>
                </Box>

                {/* Staked Validators */}
                <Heading mb={10} fontSize={[3, 4]} as="h2">
                  Bonded
                </Heading>
                {staking.state.validators
                  .filter(validator => validator.bondedStake > 0)
                  .map((validator, index) => (
                    <UnstyledButton
                      onClick={() => {
                        this.openPanel();
                        this.updateActiveIndex(index);
                      }}
                    >
                      <Validator key={index} {...validator} />
                    </UnstyledButton>
                  ))}

                {/* Watchlist */}
                <Box mb={10} mt={40}>
                  <Heading mb="4px" fontSize={[3, 4]} as="h2">
                    Watchlist
                  </Heading>
                  <Uppercase fontSize={1}>Uptime</Uppercase>
                </Box>
                {watchedValidators.map((validator, index) => {
                  const isNotLast =
                    watchedValidators.length !== index + 1 ? true : false;

                  return (
                    <Validator
                      bottomBorder={isNotLast}
                      key={index}
                      {...validator}
                    />
                  );
                })}
              </Panel>
            </Layout>,
            this.renderPanel()
          ];
        }}
      </Subscribe>
    );
  }
}

const Render = () => (
  <Provider>
    <IndexPage />
  </Provider>
);

export default Render;
