var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        bundle:path.resolve(__dirname, './client/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js',
    },
};
