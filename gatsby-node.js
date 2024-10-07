const componentWithMDXScope = require('gatsby-plugin-mdx/component-with-mdx-scope');
const path = require('path');
const startCase = require('lodash.startcase');
const config = require('./config');

// Prefix to be added to the URLs
const pathPrefix = config.gatsby.pathPrefix;

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  fields {
                    id
                  }
                  tableOfContents
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors); // eslint-disable-line no-console
          reject(result.errors);
        }

        // Create pages for MDX nodes
        result.data.allMdx.edges.forEach(({ node }) => {
          createPage({
            path: `${pathPrefix}${node.fields.slug ? node.fields.slug : '/'}`, // Ensure slug includes the pathPrefix
            component: path.resolve('./src/templates/docs.js'),
            context: {
              id: node.fields.id,
            },
          });
        });
      })
    );
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        $components: path.resolve(__dirname, 'src/components'),
        buble: '@philpl/buble', // Reduce bundle size
      },
    },
  });
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-proposal-export-default-from',
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent);
    let value = parent.relativePath.replace(parent.ext, '');

    if (value === 'index') {
      value = '';
    }

    // Adjust slug creation to account for pathPrefix
    const slugValue = config.gatsby && config.gatsby.trailingSlash
      ? value === '' ? `/` : `/${value}/`
      : `/${value}`;

    createNodeField({
      name: `slug`,
      node,
      value: `${pathPrefix}${slugValue}`, // Prepend the pathPrefix to the slug
    });

    createNodeField({
      name: 'id',
      node,
      value: node.id,
    });

    createNodeField({
      name: 'title',
      node,
      value: node.frontmatter.title || startCase(parent.name),
    });
  }
};
