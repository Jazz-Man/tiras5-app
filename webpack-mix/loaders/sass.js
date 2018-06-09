const extractSCSS = require('../plugins/ExtractTextPlugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    test: /\.s[ac]ss$/,
    use: extractSCSS.extract({
        publicPath: '../',
        fallback: 'style',
        use: [
            {
                loader: 'css',
                options: {
                    sourceMap: true,
                    minimize: is_prod
                }
            },
            {
                loader: 'postcss',
                options: {
                    plugins: [
                        autoprefixer()
                    ],
                    sourceMap: true
                }
            },
            {
                loader: 'resolve-url',
                options: {
                    root: '../',
                    keepQuery: true
                }
            },
            {
                loader: 'sass',
                options: {
                    sourceMap: true
                }
            }
        ]
    })
};