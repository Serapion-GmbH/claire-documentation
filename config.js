const config = {
  gatsby: {
    pathPrefix: '',
    siteUrl: 'https://serapion-gmbh.github.io',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '',
    logoLink: '',
    title: 'Nova',
    githubUrl: '',
    helpUrl: '',
    tweetText: '',
    social: '',
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/overview',
      '/services-and-integrations',
      '/requirements',
      '/getting-started',
    ],
    collapsedNav: [
      '/overview', // add trailing slash if enabled above
    ],
    links: [{ text: '', link: '' }],
    frontLine: false,
    ignoreIndex: true,
    title: '',
  },
  siteMetadata: {
    title: 'Nova App Documentation',
    description: 'Documentation for Nova application',
    ogImage: '',
    docsLocation: '',
    favicon: 'src/components/images/logo-nova.svg',
  },
  pwa: {
    enabled: true,
    manifest: {
      name: 'Nova App Documentation',
      short_name: 'NovaDocs',
      start_url: '/',
      background_color: '#716a7e',
      theme_color: '#72688c',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icon: 'src/components/images/logo-nova.svg',
      icons: [
        {
          src: 'src/components/images/logo-nova.svg',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
