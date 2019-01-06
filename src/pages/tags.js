import React from "react"
import PropTypes from "prop-types"
import Layout from '../components/Layout'
import SEO from '../components/SEO'

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
	<Layout title={title}>
		<SEO title={'Tags'} />
    <Helmet title={title} />
    <div>
      <h1>Tags</h1>
      <ul style={{
				paddingLeft: 0
			}}>
        {group.map(tag => (
          <li className="tag" key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author,
        siteUrl
      }
    }
    allMarkdownRemark(
      limit: 2000
			filter: {
				frontmatter: {
					published: {
						ne: false
						ne: null			
					}
				}
			}
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
