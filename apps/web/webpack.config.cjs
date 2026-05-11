const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

/** @param {unknown} _env */
/** @param {{ mode?: string }} argv */
module.exports = (_env, argv) => {
  const isProd = argv.mode === 'production'
  return {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProd ? '[name].[contenthash].js' : '[name].js',
      clean: true,
      publicPath: '/',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new ForkTsCheckerWebpackPlugin({
        typescript: {
          configPath: path.resolve(__dirname, 'tsconfig.json'),
        },
      }),
    ],
    devServer: {
      host: '127.0.0.1',
      port: 8080,
      hot: true,
      historyApiFallback: true,
    },
    devtool: isProd ? 'source-map' : 'eval-cheap-module-source-map',
  }
}
