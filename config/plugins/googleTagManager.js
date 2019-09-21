const env = require("../env");

module.exports = {
  use: "gridsome-plugin-gtm",
  options: {
    id: "GTM-XXXXXXX",
    enabled: true,
    debug: env.DEV
  }
};
