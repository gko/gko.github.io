import React from 'react'
import PropTypes from 'prop-types'

class HTML extends React.Component {
    render() {
        return (
            <html amp="true" {...this.props.htmlAttributes}>
                <head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                    <meta
                        name="google-site-verification"
                        content="UnUpmjHYK-ovLPrET8_xJ_XgJnmCyQcrYxkWkN06Z0k"
                    />
                    {this.props.headComponents}{' '}
                </head>{' '}
                <body {...this.props.bodyAttributes}>
                    {' '}
                    {this.props.preBodyComponents}{' '}
                    <div
                        key={`body`}
                        id="___gatsby"
                        dangerouslySetInnerHTML={{
                            __html: this.props.body,
                        }}
                    />{' '}
                    {this.props.postBodyComponents}{' '}
                </body>{' '}
            </html>
        )
    }
}

export default HTML
