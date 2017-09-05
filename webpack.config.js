var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './public',
        port: 3000,
        historyApiFallback:{
            index:'index.html'
        }
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './js/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    output: {
        path: 'public',
        filename: 'bundle.min.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.API_LOCAL_URL': JSON.stringify(process.env.API_LOCAL_URL),
            'process.env.API_PROD_URL': JSON.stringify(process.env.API_PROD_URL)
        }),
    ]
};
