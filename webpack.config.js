const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/ts/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'es5.bundle.js',
  },
  // Currently we need to add '.ts' to the resolve.extensions array.
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  // Source maps support ('inline-source-map' also works)
  devtool: 'source-map',

  // Add the loader for .ts files.
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
    ],
  },
};
