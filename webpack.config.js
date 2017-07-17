module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
        publicPath: 'dist'
    },
    devtool: "source-map",
    devServer: {
        contentBase: '.'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".css", ".js", ".json"]
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            { test: /\.css$/, use: ["style-loader", "css-loader"] }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};
