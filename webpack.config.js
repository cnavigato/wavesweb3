const path = require('path');

module.exports = {
 entry: './src/main.js',
 output: {filename:'./dist/build.js'},
 module:{
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
}