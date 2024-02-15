/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
    description:
      "A Simple, Free Gatsby/TailwindCSS Starter Theme For Business Websites",
    author: "https://PlanFlow.dev",
    company: "Your Company Name Here",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "text",
        path: "./src/text/",
      },
    },
  ],
};
