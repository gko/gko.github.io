const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require('lodash')

const isBlogPost = ({ node: { fileAbsolutePath } }) =>
  RegExp('(/src/posts)/.*\\.md$').test(fileAbsolutePath)

const isPublished = ({ node: { frontmatter: { published = false } } }) => published

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve(`./src/templates/blog-post.js`)
    const page = path.resolve(`./src/templates/page.js`)
    const tagTemplate = path.resolve('src/templates/tags.js')

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
							sort: { order: DESC, fields: [frontmatter___date] }
							limit: 2000
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    tags
										published
                  }
                  fileAbsolutePath
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const allPosts = result.data.allMarkdownRemark.edges
        const posts = allPosts.filter(isBlogPost).filter(isPublished)
        const pages = allPosts.filter(p => !isBlogPost(p))

        posts.forEach((post, index) => {
          const previous =
            index === posts.length - 1 ? null : posts[index + 1].node
          const next = index === 0 ? null : posts[index - 1].node

          createPage({
            path: post.node.fields.slug,
            component: blogPost,
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          })
        })

        pages.forEach(post => {
          createPage({
            path: post.node.fields.slug,
            component: page,
            context: {
              slug: post.node.fields.slug,
            },
          })
        })

        let tags = []

        _.each(posts, post => {
          if (_.get(post, 'node.frontmatter.tags')) {
            tags = tags.concat(post.node.frontmatter.tags)
          }
        })

        tags = _.uniq(tags)

        tags.forEach(tag => {
          createPage({
            path: `/tags/${_.kebabCase(tag)}/`,
            component: tagTemplate,
            context: {
              tag,
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({
      node,
      getNode,
    })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
