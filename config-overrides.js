const webpack = require("webpack");

module.exports = function override(config, env) {
    config.resolve.fallback = {
        url: require.resolve("url"),
        fs: require.resolve("graceful-fs"),
        zlib: require.resolve("browserify-zlib"),
        buffer: require.resolve("buffer"),
        net: false,
        stream: require.resolve("stream-browserify"),
        // "fs": false,
        tls: false,
        'process/browser': require.resolve('process/browser'),
        // "net": false,
        http: require.resolve("stream-http"),
        https: false,
        // "zlib": require.resolve("browserify-zlib"),
        path: require.resolve("path-browserify"),
        // "stream": require.resolve("stream-browserify"),
        util: require.resolve("util/"),
        crypto: require.resolve("crypto-browserify")
    };
    config.plugins.push(
        new webpack.ProvidePlugin({
            process: "process/browser",
            Buffer: ["buffer", "Buffer"],
        }),
        new webpack.NormalModuleReplacementPlugin(/node:/, (resource) => {
            const mod = resource.request.replace(/^node:/, "");
            switch (mod) {
                case "buffer":
                    resource.request = "buffer";
                    break;
                case "stream":
                    resource.request = "readable-stream";
                    break;
                default:
                    throw new Error(`Not found ${mod}`);
            }
        }),
    );
    config.ignoreWarnings = [/Failed to parse source map/];

    return config;
};