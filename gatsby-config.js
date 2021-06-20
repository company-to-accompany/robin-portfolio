/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/robin-portfolio",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Robin Portfolio`,
        short_name: `Robin Portfolio`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#343434`,
        display: 'standalone',
        icon: 'src/assets/img/favicon.png',
      },
    }
  ],
}
