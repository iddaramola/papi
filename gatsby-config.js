module.exports = {
  siteMetadata: {
    title: `Papitrends Store`,
    description: `Pick up original African style blend with Western flavor: attires you can get from nowhere else`,
    author: `@iddaramola`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Papitrends Store`,
        short_name: `Papitrends`,
        start_url: `/`,
        background_color: `#D2691E`,
        theme_color: `#D2691E`,
        display: `minimal-ui`,
        icon: `src/images/papi-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
