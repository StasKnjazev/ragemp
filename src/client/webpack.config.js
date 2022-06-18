// webpack.config.js
const path = require('path')

module.exports = {
    mode: 'production',
    
    entry: {
        main: path.resolve(__dirname, './src/index.mjs'),
    },

    output: {
        path: path.resolve(__dirname, '../.././client_packages/'),
        filename: 'client.js'
    }
}