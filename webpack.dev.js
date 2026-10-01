// import path from "node:path";
// import HtmlWebpackPlugin from "html-webpack-plugin";

// export default {
//     mode: "development",
//     entry: "./src/index.js",
//     output: {
//         filename: "main.js",
//         path: path.resolve(import.meta.dirname, "dist"),
//         clean: true,
//     },
//     devtool: "eval-source-map",
//     devServer: {
//         watchFiles: ["./src/template.html"],
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: "./src/template.html"
//         }),
//     ],

//     module: {
//         rules: [
//             {
//                 test: /\.css$/i,
//                 use: ["style-loader", "css-loader"],
//             },
//             {
//                 test: /\.html$/i,
//                 use: ["html-loader"]
//             },
//             {
//                 test: /\.(png|svg|jpg|jpeg|gif)$/i,
//                 type: "asset/resource",

//             },
//         ],
//     },
// };

 import { merge } from 'webpack-merge';
 import common from './webpack.common.js';

 export default merge(common, {
   mode: 'development',
   devtool: 'inline-source-map',
   devServer: {
     static: './dist',
   },
 });