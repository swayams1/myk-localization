
const path = require('path');

module.exports = {
  entry: './src/localization/lib/translate',
  devtool: 'inline-source-map',
  
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'localization.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'localization',
    libraryTarget: 'var',
  }
};