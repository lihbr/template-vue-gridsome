// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config
const env = require("./config/env");

const plugins = require("./config/plugins");

const chainWebpack = require("./config/chainWebpack");
const postcssPlugins = require("./config/postcssPlugins");

module.exports = {
  /**
   * Basic configuration
   */
  siteName: env.APP_NAME,
  siteDescription: env.APP_DESC,
  siteUrl: env.APP_URL,
  pathPrefix: "",
  titleTemplate: `%s - ${env.APP_NAME}`,
  permalinks: {
    trailingSlash: false
  },

  /**
   * Icon configuration
   */
  icon: {
    favicon: {
      src: "./static/favicon.png",
      sizes: [16, 32, 96]
    },
    touchicon: {
      src: "./static/favicon.png",
      sizes: [76, 152, 120, 167, 180]
    }
  },

  /**
   * Plugins configuration
   */
  plugins,

  /**
   * GraphQL configuration
   */
  templates: {
    Post: "/blog/:year/:month/:day/:slug"
  },
  metadata: {},

  /**
   * Build configuration
   */
  chainWebpack,
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      },
      sass: {
        implementation: require("sass"),
        fiber: require("fibers")
      }
    }
  },

  /**
   * Dev server configuration
   */
  host: env.APP_HOST,
  port: env.APP_PORT
};
