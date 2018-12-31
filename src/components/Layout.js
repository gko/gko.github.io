import React from 'react'
import { Link } from 'gatsby'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            textAlign: 'center'
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            <span className="arrow">←</span> {title}
          </Link>
        </h3>
      )
    }

    const footer = (<footer>
      © 2018,&nbsp;<a href="mailto:hi@konstantin.io?subject=hello">Konstantin</a>
    </footer>);

    return (
      <div>
        {header}
        {children}
        {footer}
      </div>
    )
  }
}

export default Layout
