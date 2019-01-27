import React from 'react'
import { Link, graphql } from 'gatsby'
import format from 'date-fns/format'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Helmet } from 'react-helmet'

import kebabCase from 'lodash/kebabCase'

class BlogPostTemplate extends React.Component {
    render() {
        const post = this.props.data.markdownRemark
        const {
            siteUrl,
            title: siteTitle,
            author,
        } = this.props.data.site.siteMetadata
        const { previous, next, slug } = this.props.pageContext
        const url = `${siteUrl}${slug}`
        const tweet = encodeURIComponent(url)
        const { title, tags, date } = post.frontmatter

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO
                    title={title}
                    description={post.excerpt}
                    url={url}
                    type="article"
                />
                <Helmet title={title}>
                    <html amp="true" />
                    <script async src="https://cdn.ampproject.org/v0.js" />
                    <style amp-boilerplate="">{`body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`}</style>
                    <noscript>{`<style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style>`}</noscript>
                    <meta name="twitter:card" content="summary_large_image" />
                    <link rel="canonical" href={url} />
                    <meta
                        name="twitter:image"
                        content={`${siteUrl}/${kebabCase(title)}.png`}
                    />
                    <amp-img
                        src={`${siteUrl}/${kebabCase(title)}.png`}
                        alt={title}
                        height="400"
                        width="800"
                    />
                    <script type="application/ld+json">
                        {`{
                      "@context": "http://schema.org",
                      "@type": "NewsArticle",
                      "headline": "${title}",
                      "datePublished": "${date}",
                      "dateModified": "${date}",
                      "author": "${author}",
                      "publisher": {
                        type: "Person",
                        name: "${author}"
                      },
                      "mainEntityOfPage": "${siteUrl}/${kebabCase(title)}",
                      "image": [
                        "${siteUrl}/${kebabCase(title)}.png"
                      ]
                    }`}
                    </script>
                </Helmet>

                <h1>{post.frontmatter.title}</h1>
                {tags && (
                    <ul
                        className="tags"
                        style={{
                            paddingLeft: 0,
                        }}
                    >
                        {tags.map(tag => (
                            <li key={tag} className="tag">
                                <Link to={`/tags/${kebabCase(tag)}/`}>
                                    {tag}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
                <p>{format(date, 'MMMM DD, YYYY')}</p>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
                <hr />
                <p className="share">
                    <a
                        className="twitter"
                        href={`https://twitter.com/intent/tweet?text=${tweet}`}
                    >
                        Tweet
                    </a>
                </p>

                <ul
                    className="navigation"
                    style={{
                        display: `flex`,
                        flexWrap: `wrap`,
                        justifyContent: `space-between`,
                        listStyle: `none`,
                        padding: 0,
                        margin: '2rem 0 0',
                    }}
                >
                    <li>
                        {previous && (
                            <Link to={previous.fields.slug} rel="prev">
                                <span className="arrow">←</span>{' '}
                                {previous.frontmatter.title}
                            </Link>
                        )}
                    </li>
                    <li>
                        {next && (
                            <Link to={next.fields.slug} rel="next">
                                {next.frontmatter.title}{' '}
                                <span className="arrow">→</span>
                            </Link>
                        )}
                    </li>
                </ul>
            </Layout>
        )
    }
}

export default BlogPostTemplate

export const pageQuery = graphql`
    query BlogPostBySlugAMP($slug: String!) {
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
                tags
                date
            }
            fields {
                slug
            }
        }
    }
`
