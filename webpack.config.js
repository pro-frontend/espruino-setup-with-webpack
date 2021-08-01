const path = require("path");
// Next option is to optimize compilation process. Unused cause 525 ms => 2300 ms time.
// const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  // bundling mode
  mode: "production",

  // entry files
  entry: "./src/app.ts",

  // output bundles (location)
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },

  // file resolutions
  resolve: {
    extensions: [".ts", ".js"],
  },

  // loaders
  module: {
    rules: [
      {
        test: /\.ts?/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          },
        },
        exclude: /node_modules/,
      },
    ],
  },

  // plugins
  // plugins: [
  //   new ForkTsCheckerWebpackPlugin(), // run TSC on a separate thread
  // ],
};
