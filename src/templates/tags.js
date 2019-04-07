import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

// Components
import { Link, graphql } from 'gatsby'

class Tags extends React.Component {
    render() {
        const { tag } = this.props.pageContext
        const { edges, totalCount } = this.props.data.allMarkdownRemark
        const { siteUrl, title: siteTitle } = this.props.data.site.siteMetadata
        const tagHeader = `${totalCount} post${
            totalCount === 1 ? '' : 's'
        } tagged with "${tag}"`

        return (
            <Layout title={siteTitle}>
                <SEO title={tagHeader} />
                <h1>{tagHeader}</h1>
                <ul>
                    {edges.map(({ node }) => {
                        const { slug } = node.fields
                        const { title } = node.frontmatter
                        return (
                            <li key={slug}>
                                <Link to={slug}>{title}</Link>
                            </li>
                        )
                    })}
                </ul>
                <Link to="/tags">All tags</Link>
            </Layout>
        )
    }
}

export default Tags

export const pageQuery = graphql`
    query($tag: String) {
        site {
            siteMetadata {
                title
                author
                siteUrl
            }
        }
        allMarkdownRemark(
            limit: 2000
            sort: { fields: [frontmatter___date], order: DESC }
            filter: {
                frontmatter: {
                    tags: { in: [$tag] }
                    published: { ne: false, ne: null }
                }
            }
        ) {
            totalCount
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                    }
                }
            }
        }
    }
`
