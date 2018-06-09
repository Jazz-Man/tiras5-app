const { join, resolve } = require("path");
const { sync } = require("glob");
const appRoot = require("app-root-path");

global.rootPath = (append = "") => resolve(appRoot.path, append);
global.environment = process.env.NODE_ENV;
global.is_prod = environment === "production";

global.getFilesFromDir = dir =>
  sync(join(dir, "*.js")).map(loader => require(loader));
