module.exports = [
  {
    use: "@gridsome/source-filesystem",
    options: {
      path: "./content/post/blog/*.json",
      typeName: "Post"
    }
  }
];
