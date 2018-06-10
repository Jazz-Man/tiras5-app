module.exports = {

    test: /\.(woff(2)?)(\?[a-z0-9=&.]+)?$/,
    use:  [
        {
            loader:  'url',
            options: {
                limit:      10000,
                mimetype:   'application/font-woff',
                name:       'fonts/[name].[ext]?[hash]',
                fallback:   'file-loader',
                publicPath: '../'
            }
        }
    ],

};