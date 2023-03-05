const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    main: "./src/scripts/main.js"
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
devtool: 'inline-source-map',
plugins: [
    new HtmlWebpackPlugin({
      title: 'Battleship',
    }),
  ],
module: {
  rules: [
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.gif$/,
      type: 'asset/inline',
    },
    {
      test: /\.(ttf|eot|svg)$/,
      type: 'asset/resource',
    },
  ],
},
resolve: {
    alias: {
      config$: './configs/app-config.js',
      react: './vendor/react-master',
    },
    extensions: ['.js', '.jsx'],
    modules: [
      'node_modules',
      'bower_components',
      'shared',
      '/shared/vendor/modules',
    ],
  },
};