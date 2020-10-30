const path = require('path');

module.exports = {
    entry: './src/test_rx.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9847
    }
};