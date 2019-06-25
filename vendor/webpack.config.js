// webpack v4

const webpack = require('webpack');
const path = require('path');

// pour créer le fichier CSS on utilise extractText
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// pour minifier le CSS
const OptimizeCSSAssets = require("optimize-css-assets-webpack-plugin");
new OptimizeCSSAssets();

const devMode = process.env.NODE_ENV !== 'production';


var nodePath = path.resolve( __dirname, 'vendor/node_modules');

module.exports = {

    entry: { main: '../src/Ice/DecoupeBundle/Resources/private/src/index.js' },
    output: {
        path: path.resolve('../src/Ice/DecoupeBundle/Resources/public/assets'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            // babel converts ES6 JS into old-browser friendly JS, see .babelrc for more details

            {
                test: /\.js$/,

                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['transform-es2015-template-literals']

                    }

                }
            },
            // allow SCSS to be compiled in CSS
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    { loader: 'postcss-loader', options: { config: {
                                path: 'postcss.config.js'
                            }
                        }
                    }, 'sass-loader'

                ],
            }


        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "app.css",
            chunkFilename: "[id].css"
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],
};

// minify CSS for production
if (process.env.NODE_ENV === 'production') {
    module.exports.plugins.push(new OptimizeCSSAssets());
}