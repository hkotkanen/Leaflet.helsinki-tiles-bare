module.exports = {
    entry:  __dirname + "/src/app.js",
    output: {
        path: __dirname + "/dist",
        filename: "Leaflet.helsinki-tiles-bare.js",
        library: "heltiles"
    },
    externals: {
        L: "L"
    },
    resolve: {
        root: __dirname,
        modulesDirectories: ['node_modules'],
    }
};
