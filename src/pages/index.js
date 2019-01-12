import React, { Component } from "react";
import { Heading, Text, Box } from "rebass";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Tag from "../components/Tag";
import Uppercase from "../components/Uppercase";
import Panel from "../components/Panel";
import Validator from "../components/Validator";

import data from "../data.json";

const ATOMUSDValue = 5;

class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      liquidStake: 10843,
      ...data
    };
  }

  render() {
    return (
      <Layout>
        <SEO />

        <Panel>
          <Heading mt={[0, 4]} mb="4px" fontSize={[4, 5]} as="h1">
            Staking
          </Heading>

          {/* Current Value Of My Stake */}
          <Text mb={16} fontSize={[4, 5]} fontWeight="var(--weight-semibold)">
            $
            {(
              this.state.staked
                .map(validator => validator.bondedStake)
                .reduce((sum, value) => sum + value) * ATOMUSDValue
            ).toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </Text>

          {/* Liquid Stake */}
          <Box mb={40}>
            <Tag>LIQUID STAKE</Tag>{" "}
            <Text as="span" fontWeight="var(--weight-semibold)">
              {(this.state.liquidStake || 0).toLocaleString()} ATOM
            </Text>
          </Box>

          {/* Staked Validators */}
          <Heading mb={10} fontSize={[3, 4]} as="h2">
            Bonded
          </Heading>
          {this.state.staked.map((validator, index) => (
            <Validator key={index} {...validator} />
          ))}

          {/* Watchlist */}
          <Box mb={10} mt={40}>
            <Heading mb="4px" fontSize={[3, 4]} as="h2">
              Watchlist
            </Heading>
            <Uppercase fontSize={1}>Uptime</Uppercase>
          </Box>
          {this.state.watched.map((validator, index) => {
            const isNotLast =
              this.state.watched.length !== index + 1 ? true : false;

            return (
              <Validator bottomBorder={isNotLast} key={index} {...validator} />
            );
          })}
        </Panel>
      </Layout>
    );
  }
}

export default IndexPage;
