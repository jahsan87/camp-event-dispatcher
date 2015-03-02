path = require('path');

module.exports = {
  entry: {
    main: "./src/main.js",
    spec: "mocha!./spec/index.js"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
  },
  resolve: {
    extensions: [
      "", 
      ".js",
      ".coffee",
      ".scss",
      ".less",
      ".jade",
      ".json"
    ],
    root: [
      path.join(__dirname, 'web'),
      path.join(__dirname, 'src'),
      path.join(__dirname, 'spec'),
      path.join(__dirname, 'style'),
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'lib'),
    ]
  },
  module: {
    loaders: [
      { test: /\.coffee$/, loader: "coffee-loader" },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.html.jade$/, loader: "jade-html" },
      { test: /\.jade$/, loader: "jade" },
      { test: /\.less$/, loader: "style!css!less" },
      { test: /\.sass$/, loader: "style!css!sass" },
      { test: /\.scss$/, loader: "style!css!sass" },
      { test: /\.stylus$/, loader: "stylus" },
      { test: /\.json$/, loader: "json" },
    ]
  },
  devtool: 'source-map'
};
