const path = require("path");
const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: "production",
  entry: "./src/app.ts",
target:"node",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".js"],
    plugins: [new TsconfigPathsPlugin()],

  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(ts)?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
