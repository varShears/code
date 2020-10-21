const path = require('path')

module.exports = {
  entry: './file/src/code.js',
  output: {
    filename: '[name].[fullhash].js',
    path: path.resolve(__dirname, 'dist'),
  },
}
