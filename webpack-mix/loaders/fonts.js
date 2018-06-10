module.exports = {

    test:    /\.(ttf|eot|svg?)(\?[a-z0-9=&.]+)?$/,
    loader:  'file',
    options: {
        name: 'fonts/[name].[ext]?[hash]',
        publicPath: '../'
    }

};