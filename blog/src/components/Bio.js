import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              marginTop: '1em'
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                borderRadius: `15%`,
              }}
            />
            <p>
              <a href={`https://twitter.com/${social.twitter}`}>twitter</a> &bull;&nbsp;
              <a href={`https://github.com/${social.github}`}>github</a> &bull;&nbsp;
              <a href={`https://fr.linkedin.com/in/${social.linkedin}`}>linkedin</a>
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 180, height: 180) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter,
          github,
          linkedin,
        }
      }
    }
  }
`

export default Bio
