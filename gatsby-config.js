module.exports = {
  siteMetadata: {
    title: `Stakinghood`,
    description: `The "Robinhood" for Staking in Validators on the Cosmos network.`,
    author: `@mirshko`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Stakinghood`,
        short_name: `Stakinghood`,
        start_url: `/`,
        background_color: `#161931`,
        theme_color: `#161931`,
        display: `minimal-ui`,
        icon: `src/images/cosmos-logo.png`
      }
    }
  ]
};
