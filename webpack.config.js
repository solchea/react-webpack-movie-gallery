module.exports = {

	entry: './index.jsx',

	output: {
		filename: 'bundle.js',
		publicPath: 'http://localhost:8090/assets'
	},

	module: {
		loaders: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel'
			}
		]
	},

	externals: {
		'react': 'React'
	},

	resolve: {
		extensions: ['', '.js', '.jsx']
	}
}
