const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'dist/bundle.js'
  },

  module: {
     loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract({ 
            	allChunks: true,
				fallback: 'style-loader',
				use: 'css-loader?modules&importLoaders=1&camelCase=dashes&localIdentName=[local]&minimize=true!sass-loader'
			})}
        ]
  },

  plugins: [
    new ExtractTextPlugin({ filename: 'dist/bundle.css', disable: false, allChunks: true })
  ]
};
