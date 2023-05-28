module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("public")
  return {
    addPassthroughCopy: true,

    dir: {
      input: 'content'
    }
  }
}
