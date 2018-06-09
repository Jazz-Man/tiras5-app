const { TsConfigPathsPlugin } = require("awesome-typescript-loader");

module.exports = new TsConfigPathsPlugin({
  useBabel: true,
  useCache: true,
  babelOptions: {
    babelrc: false,
    presets: [
      [
        "env",
        {
          targets: "last 2 versions, ie 11",
          modules: false
        }
      ]
    ]
  },
  usePrecompiledFiles: true
});
