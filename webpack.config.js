var webpack = require('webpack')
var path = require('path')

module.exports = {

    mode: 'none',
    entry: {
        app: './src/app.js'
    },
    output: {
        filename: '../public/build/bundle.js',
        sourceMapFilename: '../public/build/bundle.map'
    },
    devtool: '#source-map',
    module: {
        rules: [
            {
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                query: {
                    presets: ['@babel/react', '@babel/preset-env']
                }
            }
        ]
    }
}