module.exports = {
  output: {
    filename: 'app.js'
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: "json" }
    ]
  }
}