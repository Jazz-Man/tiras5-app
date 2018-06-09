require("./helpers");
const { join, resolve, relative, dirname, basename, extname } = require("path");
const { sync } = require("glob");
const configPath = rootPath("webpack-mix");
const loadersDir = join(configPath, "loaders");
const pluginsDir = join(configPath, "plugins");

const settings = {
  source_path: "src/scripts",
  public_output_path: "dist",
  extensions: [
    ".js",
    ".ts",
    ".tsx",
    ".sass",
    ".scss",
    ".css",
    ".png",
    ".pug",
    ".svg",
    ".woff",
    ".woff2",
    ".ttf",
    ".eot",
    ".gif",
    ".jpeg",
    ".jpg",
    ".webm",
    ".html"
  ],
  dev_server: {
    port: "3000"
  }
};

const outputPath = resolve(settings.public_output_path);
const alias = settings.alias !== undefined ? settings.alias : {};

const extensionGlob = `*{${settings.extensions.join(",")}}*`;

const getPlugins = () => {
  const allPlugins = getFilesFromDir(pluginsDir);

  let plugins = [];

  allPlugins.forEach(item => {
    if (Array.isArray(item)) {
      item.forEach(plug => plugins.push(plug));
    } else {
      plugins.push(item);
    }
  });

  return plugins;
};

const getEntryPoints = () => {
  const entryPath = join(settings.source_path);
  const packPaths = sync(join(entryPath, extensionGlob));

  return packPaths.reduce((map, entry) => {
    const localMap = map;
    const namespace = relative(join(entryPath), dirname(entry));
    const _basename = basename(entry, extname(entry));
    localMap[join(namespace, _basename)] = resolve(entry);

    return localMap;
  }, {});
};

const getLoaders = () => {
  return getFilesFromDir(loadersDir);
};

module.exports = {
  settings,
  getPlugins,
  getLoaders,
  getEntryPoints,
  alias,
  outputPath,
  extensionGlob
};
