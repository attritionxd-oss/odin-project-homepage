import path from "node:path";
import { fileURLToPath } from "node:url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import FaviconsWebpackPlugin from "favicons-webpack-plugin";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sharpAdapter = require("responsive-loader/sharp");

export default {
  entry: { app: "./src/index.js" },
  mode: "development",
  devServer: {
    static: "./dist",
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Project: Todo List",
      template: "./src/template.html",
    }),
    new FaviconsWebpackPlugin("./src/assets/logo.png"),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name][contenthash].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png)$/i,
        loader: "responsive-loader",
        options: {
          adapter: sharpAdapter,
          sizes: [40, 200, 300, 400, 600], // The widths you want to generate
          placeholder: true, // Optional: low-res blur-up effect
          format: "webp", // Converts to modern format automatically
        },
        // This ensures the loader handles both normal imports AND those with queries
        oneOf: [
          {
            // Matches imports with ?sizes=
            resourceQuery: /sizes?/,
            use: [
              {
                loader: "responsive-loader",
                options: {
                  adapter: sharpAdapter,
                  format: "webp",
                },
              },
            ],
          },
          {
            // Fallback for regular image imports without queries
            type: "asset/resource",
          },
        ],
      },
    ],
  },
};
