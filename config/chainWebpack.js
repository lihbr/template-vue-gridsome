const path = require("path");

const addStyleResource = rule => {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "../src/assets/sass/core.sass")]
    });
};

const chainWebpack = config => {
  // Inject sass in all vue-files
  const types = ["vue-modules", "vue", "normal-modules", "normal"];
  types.forEach(type => {
    addStyleResource(config.module.rule("sass").oneOf(type));
  });
};

module.exports = chainWebpack;
