const path = require('path');

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, 'src/js/app.js'),
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                // This will match .mjs, .jsx. and .js files. We also do not want to transpile libraries.
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                   loader: 'babel-loader',
                   options: {
                       presets: ['@babel/preset-react']
                   }
                }
            }
        ]
    }
}