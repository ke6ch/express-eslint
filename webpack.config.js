const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public/js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/react'
              ]
            }
          }
        ]
      }
    ]
  }
};