const { 
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://aelanplace.com/',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

require("dotenv").config({
  path: '.env',
})

module.exports = {
  pathPrefix: "/Aelan-Place",  
  siteMetadata: {
    title: 'Aelan Place',
    description: 'Tropical apartments located in Vanuatu',    
    author: 'scientistcoco',
    viewport: 'width=device-width, initial-scale=1',
    googleSiteVerification: 'pZzEZkrKxifrfDq4Jm-RHAA5yqLE6fQ26LV5hHqSiag',
    siteUrl,
  },
  plugins: [    
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }],          
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          }
        }
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ["/admin/*"]
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: "UA-137377703-2",
      }
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',    
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-antd',
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/aelan-place.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
  ],
  proxy: {
    prefix: "/api",
    url: "http://localhost:3000",
  },
}
