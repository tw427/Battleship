const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: "./src/scripts/main.js",
    gameboard: "./src/scripts/gameboard.js",
    gameboard_dom: "./src/scripts/gameboard_dom.js",
    game: "./src/scripts/game.js"
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
devtool: 'inline-source-map',
plugins: [
    new HtmlWebpackPlugin({
      title: 'New Page',
    }),
  ],
module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}