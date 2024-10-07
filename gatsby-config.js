require("dotenv").config();
const queries = require("./src/utils/algolia");
const config = require("./config");

const plugins = [
  'gatsby-plugin-sitemap',
  'gatsby-plugin-sharp',
  {
    resolve: `gatsby-plugin-layout`,
    options: {
      component: require.resolve(`./src/templates/docs.js`)
    }
  },
  'gatsby-plugin-emotion',
  'gatsby-plugin-react-helmet',
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "docs",
      path: `${__dirname}/content/`
    }
  },
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
      gatsbyRemarkPlugins: [
        {
          resolve: 'gatsby-remark-relative-links',
          options: {
            root: __dirname,
            domainRegex: /^https?:\/\/serapion-gmbh\.github\.io\/nova-documentation\/?/
          },
        },
        {
          resolve: "gatsby-remark-images",
          options: {
            maxWidth: 1035,
            sizeByPixelDensity: true
          }
        },
        {
          resolve: 'gatsby-remark-copy-linked-files'
        }
      ],
      extensions: [".mdx", ".md"],
      remarkPlugins: [],
      rehypePlugins: [],
    }
  },
  {
    resolve: `gatsby-plugin-gtag`,
    options: {
      // Your Google Analytics tracking ID
      trackingId: config.gatsby.gaTrackingId,
      // Puts tracking script in the head instead of the body
      head: true,
      // Enable IP anonymization
      anonymize: false,
    },
  },
];

// Add Algolia plugin if enabled
if (config.header.search && config.header.search.enabled && config.header.search.algoliaAppId && config.header.search.algoliaAdminKey) {
  plugins.push({
    resolve: `gatsby-plugin-algolia`,
    options: {
      appId: config.header.search.algoliaAppId, // Algolia application ID
      apiKey: config.header.search.algoliaAdminKey, // Algolia admin key to index
      queries,
      chunkSize: 10000, // default: 1000
    }
  });
}

// Add PWA functionality if enabled
if (config.pwa && config.pwa.enabled && config.pwa.manifest) {
  plugins.push({
    resolve: `gatsby-plugin-manifest`,
    options: {...config.pwa.manifest},
  });
  plugins.push({
    resolve: 'gatsby-plugin-offline',
    options: {
      appendScript: require.resolve(`./src/custom-sw-code.js`),
    },
  });
} else {
  plugins.push('gatsby-plugin-remove-serviceworker');
}

// Remove trailing slashes if disabled
if (config.gatsby && !config.gatsby.trailingSlash) {
  plugins.push('gatsby-plugin-remove-trailing-slashes');
}

module.exports = {
  pathPrefix: config.gatsby.pathPrefix,
  siteMetadata: {
    title: config.siteMetadata.title,
    description: config.siteMetadata.description,
    docsLocation: config.siteMetadata.docsLocation,
    ogImage: config.siteMetadata.ogImage,
    favicon: config.siteMetadata.favicon,
    logo: {
      link: config.header.logoLink ? config.header.logoLink : '/',
      image: config.header.logo
    }, // Backwards compatible
    headerTitle: config.header.title,
    githubUrl: config.header.githubUrl,
    helpUrl: config.header.helpUrl,
    tweetText: config.header.tweetText,
    headerLinks: config.header.links,
    siteUrl: config.gatsby.siteUrl,
  },
  plugins: plugins,
  flags: {
    DEV_SSR: false,
    FAST_DEV: false, // Enable all experiments aimed at improving develop server start time
    PRESERVE_WEBPACK_CACHE: false, // Prevent clearing of the webpack cache on changes to `gatsby-node.js` or `gatsby-config.js`
    PRESERVE_FILE_DOWNLOAD_CACHE: false, // Prevent clearing of the downloaded files cache
    PARALLEL_SOURCING: false, // Run all source plugins in parallel to improve build speed
    FUNCTIONS: false // Experimental: Compile Serverless functions in your Gatsby project
  }
};
