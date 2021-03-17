const path = require("path");
const dotenv = require("dotenv").config();
const env = dotenv.parsed;

let urloutput = env.URL_OUTPUT === "production" ? "./dist" : "./src/demo/js";

const JSLoader = {
  test: /\.(j|t)s$/,
  use: ["babel-loader", "ts-loader"],
  exclude: /node_modules/,
};

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, urloutput),
    filename: "main.js",
  },
  module: {
    rules: [JSLoader],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};
