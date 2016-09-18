var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './Main.jsx',
    output: {
        path: './static',
        filename: 'bundle.js'
    },
    module: {
        loaders: ['react-hot', {
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: [
                    'es2015',
                    'react',
                    'react-hmre'
                ]
            }
        }]
    }
};

