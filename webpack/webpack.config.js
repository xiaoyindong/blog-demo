const path = require('path');

module.exports = {
    mode: 'none',
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: 'dist/'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /.md$/,
                use: './markdown-loader'
            }
        ]
    }
}