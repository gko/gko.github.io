module.exports = {
    siteMetadata: {
        title: `Konstantin`,
        author: `Konstantin`,
        description: `A web developer, based in Paris. I'm mostly a frontend developer, but also into devops and mobile stuff.`,
        siteUrl: `https://konstantin.io`,
        keywords: [
            'konstantin',
            'blog',
            'io',
            'gorodinskiy',
            'gko',
            'developer',
            'web',
            'frontend',
            'webdeveloper',
            'aws',
            'javascript',
        ],
        social: {
            twitter: 'konstantin',
            github: 'gko',
            codepen: 'konstantin',
            linkedin: 'gorodinskiy',
        },
        repository: 'https://github.com/gko/gko.github.io',
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages`,
                name: `pages`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/posts`,
                name: `blog`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/assets`,
                name: `assets`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: 'language-',
                            inlineCodeMarker: null,
                            aliases: {},
                            showLineNumbers: false,
                            noInlineHighlight: false,
                        },
                    },
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,
                    {
                        resolve: `gatsby-remark-autolink-headers`,
                        options: {
                            className: `header-anchor`,
                            removeAccents: true,
                        },
                    },
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: `UA-55314257-2`,
            },
        },
        // `gatsby-plugin-feed`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Konstantin Gorodinskiy`,
                short_name: `Konstantin`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#333333`,
                display: `minimal-ui`,
                icon: `src/assets/icon.png`,
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                implementation: require('sass'),
            },
        },
        `gatsby-plugin-sitemap`,
    ],
}
