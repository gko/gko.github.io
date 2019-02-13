import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Helmet } from 'react-helmet'

class BlogIndex extends React.Component {
    render() {
        const { data } = this.props
        const { title, keywords, siteUrl, author } = data.site.siteMetadata
        const posts = data.posts.edges

        return (
            <Layout location={this.props.location} title={title}>
                <SEO title={`A blog by ${author}`} keywords={keywords} />
                <Helmet>
                    <link rel="canonical" href={siteUrl} />
                </Helmet>
                <Bio />
                {posts
                    .filter(post => post.node.frontmatter.published)
                    .map(({ node }) => {
                        const title = node.frontmatter.title || node.fields.slug
                        return (
                            <div key={node.fields.slug}>
                                <h3>
                                    <Link
                                        style={{ boxShadow: `none` }}
                                        to={
                                            node.frontmatter.slug ||
                                            node.fields.slug
                                        }
                                    >
                                        {title}
                                    </Link>
                                </h3>
                                <small>{node.frontmatter.date}</small>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: node.excerpt,
                                    }}
                                />
                            </div>
                        )
                    })}
            </Layout>
        )
    }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
        siteMetadata {
            title
            keywords
            siteUrl
            author
        }
    }
    posts: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC },
        filter: {
            fileAbsolutePath: { regex: "/(\/src\/posts)/.*\\.md$/" }
		}) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        slug
                        published
                    }
                }
            }
        }
        pages: allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC },
            filter: { fileAbsolutePath: { regex: "/(\/src\/pages)/.*\\.md$/" }}
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        slug
                    }
                }
            }
        }
    }
`
