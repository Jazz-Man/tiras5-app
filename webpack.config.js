const merge = require('webpack-merge');
require('./webpack-mix/helpers');

const config = require(`./webpack-mix/${environment}`);

module.exports = merge(config);