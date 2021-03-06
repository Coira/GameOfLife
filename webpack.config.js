var webpack = require('webpack');

module.exports = {
	devtool: 'cheap-module-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'react-hot!babel'
        },
        {
            test: /\.css$/, // Only .css files
	    loader: 'style!css' // Run both loaders
        },
       {
            test: /\.scss$/,
            loader: 'style!css!sass'
       }]
    },
    resolve: {
        extensions: ['', '.js', 'jsx']
    },
    output: {
        path: 'dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },

   plugins: [
    /*new webpack.optimize.DedupePlugin(),*/
	new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false
		}
	}),
	new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.HotModuleReplacementPlugin(),
	new webpack.DefinePlugin({
		'process.env': {
			'NODE_ENV': JSON.stringify('production')
		}
	})
   ]
};
