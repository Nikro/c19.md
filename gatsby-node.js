/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const simplePageTemplate = path.resolve(`src/templates/simple-page.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              locale
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: simplePageTemplate,
      context: {
        type: "markdown",
        locale: node.frontmatter.locale
      }
    })
  })
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions

  if (typeof page.context.type === "string" && page.context.type === "markdown" ) {
    languages = ['ro', 'ru', 'en']
    languages.forEach(language => {
      if (page.context.language !== page.context.locale) {
        deletePage(page)
      }
    })
  }
}
