const path = require("path");
const dotenv = require("dotenv").config();
const env = dotenv.parsed;


const JSLoader = {
  test: /\.ts(x)?$/,
  use: ["babel-loader", "ts-loader"],
  exclude: /node_modules/,
};

module.exports = {
  mode: env.URL_OUTPUT,
  entry: {
    "main": "./demo/focus-card/ts/index.ts",
    "main-react": "./demo/focus-card-react/ts/index.tsx"
  },
  output: {
    path: path.resolve(__dirname, "demo"),
    filename: "js/[name].js",
  },
  module: {
    rules: [JSLoader],
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx"],
  },
};
