const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CSSExtract = new ExtractTextPlugin('styles.css');



var config = {
    
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public', 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: CSSExtract.extract({
                use: [
                   {
                       loader: 'css-loader',
                       options: {
                           sourceMap: true
                       }
                   },
                   {
                       loader: 'sass-loader',
                       options: {
                           sourceMap: true
                       }
                   }
                ]
            })
        }
    ]
    },
    plugins: [
        CSSExtract
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        publicPath: '/dist/'
       }
};

module.exports = (env, argv) => {
    
      if (argv.mode === 'production') {
        config.devtool = 'source-map'
      }

    return config
};