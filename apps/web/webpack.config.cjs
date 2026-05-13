const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

process.env.NODE_CONFIG_DIR = path.join(__dirname, 'config')

/**
 * @param {boolean} isProd
 * @returns {{ gaiaGraphqlUri: string, codingChallengeGraphqlUri: string }}
 */
function graphqlUrisFromConfig(isProd) {
  if (isProd && !process.env.NODE_CONFIG_ENV) {
    process.env.NODE_CONFIG_ENV = 'production'
  }
  const nodeConfig = require('config')
  const gaiaBase = nodeConfig.get('servers.gaia.graphql')
  const codingChallengeBase = nodeConfig.get('servers.codingChallenge.graphql')
  return {
    gaiaGraphqlUri: String(gaiaBase).replace(/\/$/, ''),
    codingChallengeGraphqlUri: String(codingChallengeBase).replace(/\/$/, ''),
  }
}

/** @param {unknown} _env */
/** @param {{ mode?: string }} argv */
module.exports = (_env, argv) => {
  const mode = argv.mode || 'development'
  const isProd = mode === 'production'
  const graphqlProxyTarget = process.env.GRAPHQL_PROXY_TARGET

  const configUris = graphqlUrisFromConfig(isProd)
  
  const envGaiaUri = process.env.GAIA_GRAPHQL_URI
  const gaiaGraphqlUri =
    typeof envGaiaUri === 'string' && envGaiaUri.length > 0
      ? envGaiaUri
      : configUris.gaiaGraphqlUri

  const envCodingChallengeUri = process.env.CODING_CHALLENGE_GRAPHQL_URI
  const codingChallengeGraphqlUri =
    typeof envCodingChallengeUri === 'string' && envCodingChallengeUri.length > 0
      ? envCodingChallengeUri
      : configUris.codingChallengeGraphqlUri

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
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(
          isProd ? 'production' : 'development',
        ),
        'process.env.GAIA_GRAPHQL_URI': JSON.stringify(gaiaGraphqlUri),
        'process.env.CODING_CHALLENGE_GRAPHQL_URI': JSON.stringify(codingChallengeGraphqlUri),
        'process.env.GRAPHQL_AUTH': JSON.stringify(
          process.env.GRAPHQL_AUTH ?? '',
        ),
      }),
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
      // Allow WS/HMR when the page is opened as localhost or 127.0.0.1 (v5 rejects mismatched Host/Origin by default)
      allowedHosts: ['127.0.0.1', 'localhost'],
      hot: true,
      historyApiFallback: true,
      ...(graphqlProxyTarget
        ? {
            proxy: [
              {
                context: ['/graphql'],
                target: graphqlProxyTarget,
                changeOrigin: true,
                secure: false,
              },
            ],
          }
        : {}),
    },
    devtool: isProd ? 'source-map' : 'eval-cheap-module-source-map',
  }
}
