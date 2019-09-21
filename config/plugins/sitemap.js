module.exports = {
  use: "@gridsome/plugin-sitemap",
  options: {
    cacheTime: 600000, // default
    exclude: ["/_admin/*"],
    config: {
      // "/articles/*": {
      //   changefreq: "weekly",
      //   priority: 0.5
      // }
    }
  }
};
