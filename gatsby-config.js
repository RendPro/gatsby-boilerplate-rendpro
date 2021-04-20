module.exports = {
  siteMetadata: {
    title: 'Gatsby Boilerplate RendPro',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-alias-imports',
      options: {
        aliases: {
          '@theme': 'src/theme',
          '@templates': 'src/templates',
          '@components': 'src/components',
          '@assets': 'src/assets',
          '@hooks': 'src/hooks',
          '@utils': 'src/utils',
        },
      },
    },
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "x",
    //   },
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/',
      },
      __key: 'images',
    },
  ],
};
