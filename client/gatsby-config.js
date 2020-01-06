module.exports = {
  pathPrefix: "/Aelan-Place",  
  siteMetadata: {
    title: `Aelan Place`,
    description: `Tropical apartments`,    
    author: `scientistcoco`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-137377703-2",
      }
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,    
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-antd`,
    `gatsby-plugin-netlify-cms`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/aelan-place.png`, // This path is relative to the root of the site.
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  proxy: {
    prefix: "/api",
    url: "http://localhost:3000",
  },
}
