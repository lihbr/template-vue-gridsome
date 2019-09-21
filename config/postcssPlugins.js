const path = require("path");

const tailwindcssConfig = path.resolve(__dirname, "../tailwind.config.js");

const purgecssConfig = {
  content: [
    "./src/**/*.vue",
    "./src/**/*.js",
    "./src/**/*.html",
    "./src/assets/sass/**/*.sass"
  ],
  whitelist: [
    "body",
    "html",
    "img",
    "a",
    "g-image",
    "g-image--lazy",
    "g-image--loaded",
    "active",
    "active--exact"
  ],
  whitelistPatterns: [
    /.*-(enter|enter-active|enter-to|leave|leave-active|leave-to)/
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
};

const postcssImport = require("postcss-import")();
const tailwindcss = require("tailwindcss")(tailwindcssConfig);
const autoprefixer = require("autoprefixer")();
const purgecss = require("@fullhuman/postcss-purgecss")(purgecssConfig);

const postcssPlugins = [postcssImport, tailwindcss];

// Add optimizer for production
if (process.env.NODE_ENV === "production") {
  postcssPlugins.push(autoprefixer);
  postcssPlugins.push(purgecss);
}

module.exports = postcssPlugins;
