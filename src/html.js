import React from 'react'

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
                    <script type='text/javascript' src='//cdn.ampproject.org/v0.js' async></script>
                    <style amp-boilerplate="">{`body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`}</style>
                    <noscript>{`<style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style>`}</noscript>
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
