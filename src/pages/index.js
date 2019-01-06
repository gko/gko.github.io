import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const { title, keywords } = data.site.siteMetadata
    const posts = data.posts.edges

    return (
      <Layout location={this.props.location} title={title}>
        <SEO title="Konstantin" keywords={keywords} />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
							<small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
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
        title,
        keywords
      }
    }
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
			filter: {
				fileAbsolutePath: { regex: "/(\/src\/posts)/.*\\.md$/" }
				frontmatter: {
					published: {
						ne: false
						ne: null			
					}
				}
			}
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
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
        }
      }
    }
  }
`
