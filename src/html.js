import React from 'react'

const notScript = ({ type }) => type !== 'script'
const isStyle = ({ type }) => type === 'style'

class HTML extends React.Component {
    render() {
        let {
            headComponents,
            postBodyComponents,
            preBodyComponents,
        } = this.props

        if (this.props.htmlAttributes['amp']) {
            const styles = [
                ...headComponents.filter(isStyle),
                ...preBodyComponents.filter(isStyle),
                ...postBodyComponents.filter(isStyle),
            ]
            styles.forEach(style => (style.props['amp-custom'] = ''))

            headComponents = headComponents.filter(notScript)
            preBodyComponents = preBodyComponents.filter(notScript)
            postBodyComponents = postBodyComponents.filter(notScript)
        }

        return (
            <html {...this.props.htmlAttributes}>
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
                    {headComponents}{' '}
                </head>{' '}
                <body {...this.props.bodyAttributes}>
                    {' '}
                    {preBodyComponents}{' '}
                    <div
                        key={`body`}
                        id="___gatsby"
                        dangerouslySetInnerHTML={{
                            __html: this.props.body,
                        }}
                    />{' '}
                    {postBodyComponents}{' '}
                </body>{' '}
            </html>
        )
    }
}

export default HTML
