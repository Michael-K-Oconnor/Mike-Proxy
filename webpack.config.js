const webpack = require("webpack");
const path = require("path");

module.exports = {
  context: __dirname + "/client",
  entry: "./app.jsx",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "env"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  output: {
    path: __dirname + "/public",
    filename: "app.js"
  }
};
