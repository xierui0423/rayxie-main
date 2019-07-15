module.exports = {
  siteMetadata: {
    title: `Test site title!`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // // Simple config, passing URL
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     // This type will contain remote schema Query type
    //     typeName: "blogs",
    //     // This is field under which it's accessible
    //     fieldName: "blogs",
    //     // Url to query from
    //     url: "http://localhost:1337/graphql",
    //   },
    // },

    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "strapi",
        // This is field under which it's accessible
        fieldName: "strapi",
        // Url to query from
        url: "https://strapi.rayxie.me/graphql",
        // refetchInterval: 5,
      },
    },
  ]
};