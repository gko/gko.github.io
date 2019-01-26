import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, keywords, title, url, type }) {
    return (
        <StaticQuery
            query={detailsQuery}
            render={data => {
                const metaDescription =
                    description || data.site.siteMetadata.description

                const {
                    title: siteTitle,
                    author,
                    siteUrl,
                } = data.site.siteMetadata

                return (
                    <Helmet
                        htmlAttributes={{
                            lang,
                        }}
                        title={title}
                        titleTemplate={`${siteTitle}`}
                        meta={[
                            {
                                name: `description`,
                                content: metaDescription,
                            },
                            {
                                property: `og:title`,
                                content: title,
                            },
                            {
                                property: `og:description`,
                                content: metaDescription,
                            },
                            {
                                property: `og:url`,
                                content: url || siteUrl,
                            },
                            {
                                property: `og:type`,
                                content: type || `website`,
                            },
                            {
                                name: `twitter:card`,
                                content: `summary`,
                            },
                            {
                                name: `twitter:creator`,
                                content: author,
                            },
                            {
                                name: `twitter:title`,
                                content: title,
                            },
                            {
                                name: `twitter:description`,
                                content: metaDescription,
                            },
                        ]
                            .concat(
                                keywords.length > 0
                                    ? {
                                          name: `keywords`,
                                          content: keywords.join(`, `),
                                      }
                                    : []
                            )
                            .concat(meta)}
                    />
                )
            }}
        />
    )
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    keywords: [],
}

export default SEO

const detailsQuery = graphql`
    query DefaultSEOQuery {
        site {
            siteMetadata {
                title
                description
                author
                siteUrl
            }
        }
    }
`
