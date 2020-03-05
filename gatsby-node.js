const path = require(`path`);

exports.onPostBuild = ({
  reporter
}) => {
  reporter.info(`Your Gatsby site has been built!`)
}

// Create blog pages dynamically
exports.createPages = async ({
  graphql,
  actions
}) => {
  const {
    createPage
  } = actions
  const template = path.resolve(`src/templates/post.jsx`)
  const result = await graphql(`
    query{strapi {
        articles {
          title
          content
          id
        }
      }
    }
  `)
  result.data.strapi.articles.forEach(article => {
    createPage({
      path: `/posts/${article.id}`,
      component: template,
      context: {
        productId: article.id,
      },
    })
  })
}