module.exports = {
    entry: './app.js',
    output: {
        filename: './build.js'
    },
    module: {
       loaders: [
            {
                test: /\.scss$/,
                loader:'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['env']
                }
            }
        ],
    }
};