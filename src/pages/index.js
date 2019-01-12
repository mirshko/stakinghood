import React from "react";
import { Heading, Text, Box } from "rebass";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Tag from "../components/Tag";
import Uppercase from "../components/Uppercase";
import Panel from "../components/Panel";

const IndexPage = () => (
  <Layout>
    <SEO />

    <Panel>
      <Heading mb="4px" fontSize={[4, 5]} as="h1">
        Staking
      </Heading>

      <Text mb={16} fontSize={[4, 5]} fontWeight="var(--weight-semibold)">
        $103,785.50
      </Text>

      <Box mb={40}>
        <Tag>LIQUID STAKE</Tag>{" "}
        <Text as="span" fontWeight="var(--weight-semibold)">
          10,843 ATOM
        </Text>
      </Box>

      <Box mb={10}>
        <Heading fontSize={[3, 4]} as="h2">
          Bonded
        </Heading>
      </Box>

      <Box mb={10}>
        <Heading mb="4px" fontSize={[3, 4]} as="h2">
          Watchlist
        </Heading>
        <Uppercase fontSize={1}>Uptime</Uppercase>
      </Box>
    </Panel>
  </Layout>
);

export default IndexPage;
