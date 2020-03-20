/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)

function flattenMessages(nestedMessages, prefix = "") {
  return Object.keys(nestedMessages).reduce((messages, key) => {
    let value = nestedMessages[key]
    let prefixedKey = prefix ? `${prefix}.${key}` : key

    if (typeof value === "string") {
      messages[prefixedKey] = value
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey))
    }

    return messages
  }, {})
}


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
  const getMessages = (path, language) => {
    try {
      // TODO load yaml here
      const messages = require(`${path}/${language}.json`)

      return flattenMessages(messages)
    } catch (error) {
      if (error.code === "MODULE_NOT_FOUND") {
        process.env.NODE_ENV !== "test" &&
        console.error(
          `[gatsby-plugin-intl] couldn't find file "${path}/${language}.json"`
        )
      }

      throw error
    }
  }

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
        language: node.frontmatter.locale,
        intl: {
          language: node.frontmatter.locale,
          languages: [node.frontmatter.locale],
          messages: getMessages(`${__dirname}/src/intl`, node.frontmatter.locale),
          routed: true,
          originalPath: node.frontmatter.path,
          redirect: false,
          defaultLanguage: 'ro',
        },
      }
    })
  })
}

