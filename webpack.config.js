const path = require('path');

module.exports = {
    entry: './src/js/main.js',      // hlavní vstupní soubor
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),  // výstupní složka
    },
    mode: 'development',            // nebo 'production' pro build
    devtool: 'source-map',          // pro ladění
};