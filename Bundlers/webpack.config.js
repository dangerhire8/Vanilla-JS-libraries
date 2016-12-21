const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './js/main.js',
    output: {
        path: "bundle",
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
};
