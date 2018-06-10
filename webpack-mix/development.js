const merge = require("webpack-merge");

const sharedConfig = require("./shared.js");
const { outputPath } = require("./configuration.js");


module.exports = merge(sharedConfig, {
  mode: "development",
  stats: {
    assets: true,
    assetsSort: "field",
    cached: true,
    cachedAssets: true,
    children: true,
    chunks: true,
    chunkModules: true,
    chunkOrigins: true,
    chunksSort: "field",
    colors: true,
    depth: true,
    entrypoints: true,
    errorDetails: true,
    hash: true,
    modulesSort: "field",
    moduleTrace: true,
    performance: true,
    providedExports: true,
    publicPath: true,
    reasons: true,
    source: true,
    timings: true,
    usedExports: true,
    version: true,
    warnings: true
  },

  devServer: {
    clientLogLevel: "none",
    contentBase: outputPath,
    compress: true,
    watchOptions: {
      poll: true,
      ignored: /node_modules/
    }
  }
});
