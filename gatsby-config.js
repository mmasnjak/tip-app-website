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
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "1",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
};
