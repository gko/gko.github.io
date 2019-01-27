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
            author
        } = this.props.data.site.siteMetadata
        const { slug } = this.props.pageContext
        const url = `${siteUrl}${slug}`
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
                    <script type='text/javascript' src='//cdn.ampproject.org/v0.js' async></script>
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
