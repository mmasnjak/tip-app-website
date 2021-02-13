module.exports = {
  siteMetadata: {
    title: "Tip - Gratuity Calculator",
    description:
      "Spend less time doing math, and more time enjoying the company of the people you are with.",
    siteUrl: "https://tip-app.com",
    image: "/billboard.png",
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-layout`,
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-NR6RNRB0BF"],
        pluginConfig: {
          head: false,
          respectDNT: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tip - Gratuity Calculator`,
        short_name: `Tip App`,
        start_url: `/`,
        background_color: `#f2f2f7`,
        theme_color: `#f2f2f7`,
        display: `minimal-ui`,
        icon: `static/icon.png`,
      },
    },
  ],
}
