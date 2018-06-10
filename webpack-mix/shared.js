const {resolve} = require('path');

require('./helpers');

const {
    alias,
    getLoaders,
    outputPath,
    getPlugins,
    getEntryPoints,
    settings
} = require('./configuration');

const entry = getEntryPoints();

const output = {
        filename: 'js/[name].js?[hash]',
        chunkFilename: 'js/[id]-[name].chunk.js?[chunkhash]',
        path: outputPath,
        pathinfo: true,
        crossOriginLoading: "use-credentials"
    };

const plugins = getPlugins();

module.exports = {
    entry,
    output,
    target: 'web',

    module: {
        rules: getLoaders()
    },
    plugins,

    resolve: {
        extensions: settings.extensions,
        modules: [
            resolve(settings.source_path),
            'node_modules'
        ],
        alias,
        unsafeCache: true,
    },

    resolveLoader: {
        moduleExtensions: ['-loader']
    }
};