const { resolve } = require('path');
const { dependencies } = require('../package.json');
const BabiliPlugin = require("babili-webpack-plugin");
const nodeModules = {};
const webpack = require('webpack')

Object
	.keys(dependencies)
	.forEach((mod) => {
		nodeModules[mod] = `commonjs ${mod}`;
	});

module.exports = (env = { dev: true }) => ({
	context: resolve(__dirname, '../'),
	entry: {
		server: './index.ts'
	},
	resolve: {
		extensions: ['.js', '.ts'],
	},
	target: 'node',
	output: {
		filename: '[name].js',
		path: resolve(__dirname, '../dist'),
	},
	// devtool: env.prod ? 'source-map' : 'eval',
	module: {
		loaders: [
			{ test: /\.ts$/, loader: 'ts-loader' },
			{ test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] }
		]
	},
	plugins: env.prod ? [
		new webpack.DefinePlugin({      
      'PROD': process.env.NODE_ENV === 'production'
    }),
		new BabiliPlugin({}, {
			sourceMap: false
		})
	] : [],
	externals: nodeModules
});
