// require("@babel/register")
// const manifestConfig = require('./.manifest.config.js')

module.exports = {
  siteMetadata: {
    title: 'Gatsby + Netlify CMS Starter',
    description:
      'This repo contains an example business website that is built with Gatsby, and Netlify CMS.It follows the JAMstack architecture by using Git as a single source of truth, and Netlify for continuous deployment, and CDN distribution.',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        // modules: ['query-string'],
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        // Add any options here
      },
    },
    'gatsby-plugin-react-helmet',
    // {
    //   resolve: 'gatsby-plugin-sass',
    //   options: {
    //     // TODO: Switch to Dart Sass from Node Sass when it works reliably without messing around.
    //     // implementation: require("sass"),
    //     // Explicitly include root style path just in case.
    //     includePaths: [
    //       // `${__dirname}/src/styles`,
    //       './src/styles',
    //     ],
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-sass-resources',
    //   options: {
    //     // TODO: Make sure filename uses actual expected root folder & filename based module style.
    //     // TODO: Find out which Scss module controls filename preferences here: gatsby-plugin-sass or sass-resources-loader.
    //     resources: [
    //       // `${__dirname}/src/styles/abstract/_variables.module.scss`,
    //       // TODO: Find out if this is a better way to resolve the folder path.
    //       // resolveFromRootDir('src/styles/abstract/_variables.module.scss'),
    //       './src/styles/abstracts/_variables.module.scss',
    //     ],
    //   },
    // },
    {
      resolve: 'gatsby-plugin-manifest',
      // options: manifestConfig,
      options: {
        name: 'Jason Cady Portfolio',
        short_name: 'Jason Cady Portfolio',
        start_url: '/',
        // background_color: colors.background,
        // FIXME: Go back to DRY when sane. Currently repeating theme color variables here to avoid import issues & extra dependencies. Specifically, @babel/register has cache resolve failure issues on Netlify platform.
        background_color: '#D64000',
        // theme_color: colors.primary,
        theme_color: 'white',
        display: 'browser',
        // TODO: Use icon with equal-sided image borders because chrome dev console complains if it is not.
        icon: 'src/img/logo.svg',
        // TODO: Below line is not needed when switched to a equal sided SVG icon.
        sizes: '48x11 72x16 96x21 144x32 192x42 256x56 384x85 512x113',
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {
        // FIXME: Pass external theme object used by rest of project.
        theme: {
          primaryColor: '#9c27b0',
        },
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        // FIXME: I doubt this works right in our multiple file setup. There is no more all.scss. The "bulma css file" is supposed to get purging.
        purgeOnly: ['/vendor/vendor.scss'], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
