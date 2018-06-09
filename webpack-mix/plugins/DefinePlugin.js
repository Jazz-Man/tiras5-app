const webpack = require("webpack");

module.exports = new webpack.DefinePlugin({
  DEBUG: !is_prod
});
