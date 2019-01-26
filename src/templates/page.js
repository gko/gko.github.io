import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

class PageTemplate extends React.Component {
    render() {
        const post = this.props.data.markdownRemark
        const { title: siteTitle, siteUrl } = this.props.data.site.siteMetadata

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO
                    title={post.frontmatter.title}
                    description={post.excerpt}
                    url={siteUrl+post.fields.slug}
                />
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </Layout>
        )
    }
}

export default PageTemplate

export const pageQuery = graphql`
    query PageBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                author
                siteUrl
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
            }
            fields {
                slug
            }
        }
    }
`
