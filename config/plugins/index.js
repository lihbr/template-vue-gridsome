const sourceFileSystem = require("./sourceFileSystem");

const sitemap = require("./sitemap");
const googleTagManager = require("./googleTagManager");

const netlifyCMS = require("./netlifyCMS");

module.exports = [...sourceFileSystem, sitemap, googleTagManager, netlifyCMS];
