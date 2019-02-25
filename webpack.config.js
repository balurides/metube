const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: [
    // path.resolve(__dirname,'../src','index.js'),
    './src/index.js',
    'webpack/hot/only-dev-server',
    './style/style.css',
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: '/dist',
    hot:true,
      historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        // exclude: /node_modules/,
        loader: require.resolve('babel-loader'),
        exclude: /node_modules/

        /* use:[ {
            loader:'babel-loader',
           
            options: { babelrcRoots: ['.', '../'] },
            // options: { babelrcRoots: ['.', './node_modules/react-pdf'] },
            }], */
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: [
            {
                loader: "file-loader",
                options: {
                    outputPath: "assets/"
                }
            }
        ]
      },
      
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'output Management',
      template:"./index.html"
    }),
    new webpack.ProvidePlugin({
      _:'lodash',
      join: ['lodash','join']
    }),
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
    
};