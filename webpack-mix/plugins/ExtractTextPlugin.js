const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = new ExtractTextPlugin({
    filename: 'css/[name].css?[hash]',
    disable: false,
    allChunks: true
});