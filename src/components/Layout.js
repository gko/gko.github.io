import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/Footer';

class Layout extends React.Component {
    render() {
        const { location, title, children } = this.props
        const rootPath = `${__PATH_PREFIX__}/`
        let header

        if (location && location.pathname === rootPath) {
            header = (
                <h1
                    style={{
                        textAlign: 'center'
                    }}
                >
                    {/* <Link
                        style={{
                            boxShadow: `none`,
                            textDecoration: `none`,
                            color: `inherit`,
                        }}
                        to={`/`}
                    > */}
                    {title}
                    {/* </Link> */}
                </h1>
            )
        } else {
            header = (
                <h3 className="backLink">
                    <Link
                        style={{
                            boxShadow: `none`,
                            textDecoration: `none`,
                            color: `inherit`,
                            fontWeight: 300
                        }}
                        to={`/`}
                    >
                        <span className="arrow">←</span> {title}
                    </Link>
                </h3>
            )
        }

        return (
            <div>
                {header}
                {children}
                <Footer />
            </div>
        )
    }
}

export default Layout
