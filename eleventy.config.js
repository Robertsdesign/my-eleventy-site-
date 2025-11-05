export default function(eleventyConfig) {
  return {
    templateFormats: ["html", "njk", "md"],
    htmlTemplateEngine: "njk",
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
}
