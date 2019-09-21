const env = require("../env");

module.exports = {
  use: "gridsome-plugin-netlify-cms",
  options: {
    modulePath: "./cms/index.js",
    configPath: false,
    htmlPath: "./cms/index.html",
    publicPath: "/_admin",
    htmlTitle: `Content manager - ${env.APP_NAME}`,
    enableIdentityWidget: true
  }
};
