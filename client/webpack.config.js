config = {
  entry: __dirname + "/src/app.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/build"
  },
  devtool: 'source-map',
  // externals: {
  //   fs: '{}',
  //   tls: '{}',
  //   net: '{}',
  //   module: '{}'
  // }
}

module.exports = config;