const _ = require('lodash')
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { registerFont, createCanvas } = require('canvas')
const fs = require('fs')

const addSlash = slug => (!/\/$/.test(slug) ? slug + '/' : slug)

function getLines(ctx, phrase, maxPxLength, textStyle) {
    var wa = phrase.split(' '),
        phraseArray = [],
        lastPhrase = wa[0],
        measure = 0,
        splitChar = ' '

    if (wa.length <= 1) {
        return wa
    }

    ctx.font = textStyle
    for (var i = 1; i < wa.length; i++) {
        var w = wa[i]
        measure = ctx.measureText(lastPhrase + splitChar + w).width
        if (measure < maxPxLength) {
            lastPhrase += splitChar + w
        } else {
            phraseArray.push(lastPhrase)
            lastPhrase = w
        }
        if (i === wa.length - 1) {
            phraseArray.push(lastPhrase)
            break
        }
    }
    return phraseArray
}

// registerFont(path.join(__dirname, 'static/fonts/pt.ttf'), {
// family: 'PT Serif',
// })

const isBlogPost = ({ node: { fileAbsolutePath } }) =>
    RegExp('(/src/posts)/.*\\.md$').test(fileAbsolutePath)

const isPublished = ({
    node: {
        frontmatter: { published = false },
    },
}) => published

const createPreview = (title, fileName) => {
    return new Promise((res, rej) => {
        const dpx = 2
        const width = 600
        const canvas = createCanvas(width * dpx, (width / 1.5) * dpx)
        const ctx = canvas.getContext('2d')

        ctx.scale(2, 2)
        ctx.fillStyle = 'white'
        ctx.fillRect(0, 0, canvas.width * dpx, canvas.height * dpx)

        const fontSize = 30
        const fontStyle = `${fontSize}px Arial`
        ctx.font = fontStyle
        ctx.textAlign = 'center'
        ctx.fillStyle = 'black'

        const text = getLines(ctx, title, width, fontStyle)

        text.forEach((line, i) =>
            ctx.fillText(
                line,
                canvas.width / (2 * dpx),
                canvas.height / (2 * dpx) + fontSize * i
            )
        )

        const out = fs.createWriteStream(
            path.join(__dirname, 'public/', _.kebabCase(title) + '.png')
        )

        const stream = canvas.createPNGStream()
        stream.pipe(out)
        out.on('finish', () => res())
    })
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return new Promise((resolve, reject) => {
        const blogPost = path.resolve(`./src/templates/blog-post.js`)
        const blogPostAMP = path.resolve(`./src/templates/blog-post-amp.js`)
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
                                        title
                                        tags
                                        published
                                        slug
                                        cover_image
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

                posts.forEach(async (post, index) => {
                    const previous =
                        index === posts.length - 1
                            ? null
                            : posts[index + 1].node

                    const next = index === 0 ? null : posts[index - 1].node

                    createPage({
                        path: addSlash(
                            post.node.frontmatter.slug || post.node.fields.slug
                        ),
                        component: blogPost,
                        context: {
                            slug: post.node.fields.slug,
                            previous,
                            next,
                            filename: path.basename(post.node.fileAbsolutePath),
                        },
                    })

                    createPage({
                        path: `${addSlash(
                            post.node.frontmatter.slug || post.node.fields.slug
                        )}amp/`,
                        component: blogPostAMP,
                        context: {
                            slug: post.node.fields.slug,
                            previous,
                            next,
                            filename: path.basename(post.node.fileAbsolutePath),
                        },
                    })

                    if (!post.node.frontmatter.cover_image) {
                        await createPreview(
                            post.node.frontmatter.title,
                            post.node.fields.slug
                        )
                    }
                })

                pages.forEach(post => {
                    createPage({
                        path: addSlash(
                            post.node.frontmatter.slug || post.node.fields.slug
                        ),
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
