const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const sharedConfig = require("./shared.js");

const uglify = new UglifyJSPlugin({
  cache: true,
  parallel: true,
  sourceMap: true,
  uglifyOptions: {
    mangle: true,
    warnings: false,
    compress: {
      dead_code: true,
      drop_debugger: true,
      unsafe: false,
      conditionals: true,
      comparisons: true,
      evaluate: true,
      booleans: true,
      loops: true,
      unused: true,
      hoist_funs: true,
      hoist_vars: true,
      if_return: true,
      join_vars: true,
      side_effects: true
    },
    output: {
      comments: false,
      beautify: false
    }
  }
});

const mode = "production";

const optimization = {
  nodeEnv: mode,
  minimize: true,
  minimizer: [uglify]
};

module.exports = merge(sharedConfig, {
  mode,
  optimization,
  devtool: "source-map",
  stats: "normal"
});
