const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    core: "./js/core/index.ts",
    "react-provider": "./js/react-provider/index.ts",
    utils: "./js/utils/index.ts",
  },
  output: {
    path: path.join(__dirname, "/dist"),
    // filename: "[name].bundle.js",
    library: "[name]",
    libraryTarget: "umd",
    globalObject: "this",
    umdNamedDefine: true,
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|jsx|ts|tsx)$/, // USE THE babel-loader FOR THESE FILE EXTENSIONS
      //   loader: "babel-loader",
      //   options: {
      //     presets: ["@babel/env", "@babel/preset-react", "@babel/preset-flow"],
      //   },
      // },
      {
        test: /\.(js|jsx|ts|tsx)$/, // USE THE babel-loader FOR THESE FILE EXTENSIONS
        exclude: /node_modules/,
        use: ["ts-loader", "babel-loader"],
      },
      // {
      //   test: /\.tsx?$/,
      //   use: "ts-loader",
      //   exclude: /node_modules/,
      // },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx"],
  },
};
