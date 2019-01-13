import React from "react";
import { Heading, Text, Box } from "rebass";
import { Provider, Subscribe } from "unstated";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Uppercase from "../components/Uppercase";
import Panel from "../components/Panel";
import Validator from "../components/Validator";
import StateContainer from "../components/StateContainer";
import StakeAdjustor from "../components/StakeAdjustor";
import Tag from "../components/Tag";
import Modal from "../components/Modal";
import EmptyState from "../components/EmptyState";

const ATOMUSDValue = 5;
const findIndexBySymbol = (arr, symbol) =>
  arr.findIndex(i => i.symbol === symbol);
const uptimeAsc = (a, b) => b.uptime - a.uptime;
const bondedStakeAsc = (a, b) => b.bondedStake - a.bondedStake;

class Index extends React.Component {
  state = {
    modalOpen: false,
    activeIndex: 0
  };

  openModal = () => this.setState({ modalOpen: true });
  closeModal = () => this.setState({ modalOpen: false });
  updateActiveIndex = index => this.setState({ activeIndex: index });

  render() {
    return (
      <Subscribe to={[StateContainer]}>
        {app => {
          const watchedValidators = app.state.validators
            .filter(validator => validator.bondedStake <= 0)
            .sort(uptimeAsc);

          const stakedValidators = app.state.validators
            .filter(validator => validator.bondedStake > 0)
            .sort(bondedStakeAsc);

          const stakeValue = (
            app.state.validators
              .map(validator => validator.bondedStake)
              .reduce((sum, value) => sum + value) * ATOMUSDValue
          ).toLocaleString(undefined, { minimumFractionDigits: 2 });

          return [
            <Layout key={0}>
              <SEO />
              <Panel>
                <Heading mt={4} mb="4px" fontSize={[4, 5]} as="h1">
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
                    {app.state.liquidStake.toLocaleString()} ATOM
                  </Text>
                </Box>

                {/* Staked Validators */}
                <Heading mb={10} fontSize={[3, 4]} as="h2">
                  Bonded
                </Heading>
                {stakedValidators.length > 0 ? (
                  stakedValidators.map((validator, index) => (
                    <Validator
                      key={index}
                      onClick={() => {
                        this.openModal();
                        this.updateActiveIndex(
                          findIndexBySymbol(
                            app.state.validators,
                            validator.symbol
                          )
                        );
                      }}
                      {...validator}
                    />
                  ))
                ) : (
                  <EmptyState>You're not staking any validators</EmptyState>
                )}

                {/* Watchlist */}
                <Box mb={10} mt={40}>
                  <Heading mb="4px" fontSize={[3, 4]} as="h2">
                    Watchlist
                  </Heading>
                  <Uppercase fontSize={1}>Uptime</Uppercase>
                </Box>

                {watchedValidators.length > 0 ? (
                  watchedValidators.map((validator, index) => {
                    const isNotLast =
                      watchedValidators.length !== index + 1 ? true : false;

                    return (
                      <Validator
                        key={index}
                        onClick={() => {
                          this.openModal();
                          this.updateActiveIndex(
                            findIndexBySymbol(
                              app.state.validators,
                              validator.symbol
                            )
                          );
                        }}
                        bottomBorder={isNotLast}
                        {...validator}
                      />
                    );
                  })
                ) : (
                  <EmptyState>You're not watching any validators</EmptyState>
                )}
              </Panel>
            </Layout>,
            this.state.modalOpen && (
              <Modal key={1} onClick={() => this.closeModal()}>
                <StakeAdjustor index={this.state.activeIndex} />
              </Modal>
            )
          ];
        }}
      </Subscribe>
    );
  }
}

const RenderIndex = () => (
  <Provider>
    <Index />
  </Provider>
);

export default RenderIndex;
