const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        babelPolyfill: 'babel-polyfill',
        bundleCssLibs: "./scripts/indexCssLibs",
        bundle: "./scripts/index"
    },
    output: {
        path: "bundle",
        filename: '[name].js'
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
            {
                test: /\.css$/,
                exclude: /(vendor)/,
                loaders: ['style-loader', 'css-loader?importLoaders=1', 'postcss-loader'
                ]
            },
            {
                test: /\.css$/,
                include: /(vendor)/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("bundleLibs.css")
    ],
    devtool: 'source-map'
};
