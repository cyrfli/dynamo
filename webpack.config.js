const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    'app': [
      path.resolve(__dirname, 'client/app/index.js')
    ]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: ['file-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'client/public/index.html'),
      inject: 'body'
    }),
  ],

  resolve: {
    alias: {
      Actions: path.resolve(__dirname, 'client/app/actions/'),
      Components: path.resolve(__dirname, 'client/app/components/'),
      Constants: path.resolve(__dirname, 'client/app/constants/'),
      Containers: path.resolve(__dirname, 'client/app/containers/'),
      Helpers: path.resolve(__dirname, 'client/app/helpers/'),
      Reducers: path.resolve(__dirname, 'client/app/reducers/'),
      Services: path.resolve(__dirname, 'client/app/services/')
    },
    modules: [
      "node_modules",
      path.resolve(__dirname, 'client/app')
    ],
    extensions: ['*', '.js', '.jsx']
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8888',
        pathRewrite: {'^/api' : ''}
      }
    }
  }
};