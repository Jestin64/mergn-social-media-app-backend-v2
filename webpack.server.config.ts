import path from "path";
import * as nodeExternals from "webpack-node-externals";

export const config = {
    name: 'src',
    entry: [path.join(__dirname, './src/server.js')],
    target: "node",
    devtool: false,
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: "server.generated.js",
        // publicPath: '/dist/',
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    }

}