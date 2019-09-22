module.exports = [
  {
    use: "@gridsome/source-filesystem",
    options: {
      baseDir: "./content/posts/blog/",
      path: "*.json",
      typeName: "Post"
    }
  }
];
