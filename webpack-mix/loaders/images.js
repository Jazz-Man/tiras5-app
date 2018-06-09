module.exports = {
    test: /\.(png|jpe?g|gif)$/,
    use:  [
        {
            loader:  'url',
            options: {
                limit:      10000,
                name:       'images/[name].[ext]',
                fallback:   'file-loader',
                publicPath: '../',
            }
        }
    ]
};