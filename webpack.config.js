const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  }

  if(isProd) {
    config.minimizer = [
      new OptimizeCSSAssetsWebpackPlugin(),
      new TerserWebpackPlugin()
    ]
  }

  return config;
}

const cssLoaders = extra => {
  const loader = [{
    loader: MiniCSSExtractPlugin.loader,
    options: {
      hmr: isDev,
      reloadAll: true
    }
  },
    'css-loader'
  ] // naxkinum 'style-loader'

  if(extra) {
    loader.push(extra);
  }

  return loader;
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: ['@babel/polyfill', './index.js'],
  },
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.json'], // vor chgres bayc jogi
    alias: { // esi en shnikneri pahna, kornevoy papka es dnum
      '@': path.resolve(__dirname, 'src')
    }
  },
  optimization: optimization(),
  devServer: {
    port: 4200,
    hot: isDev
  },
  devtool: isDev ? 'source-map' : '', // dev-um tenanq mer isxodni kody daje preprocessoenreiny
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      minify: isProd
    }),
    new CleanWebpackPlugin(),
    new MiniCSSExtractPlugin({
      filename: filename('css')
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/, //styleri hamar
        use: cssLoaders()
      },
      {
        test: /\.less$/, //styleri hamar
        use: cssLoaders('less-loader')
      },
      {
        test: /\.s[ac]ss$/, //styleri hamar
        use: cssLoaders('sass-loader')
      },
      {
        test: /\.(png|jpg|svg|gif)$/, //nkarneri hamar
        use: ['file-loader']
      },
      {
        test: /\.(ttf|woff|eot|woff2)$/, //fonteri hamar
        use: ['file-loader']
      },
      {
        test: /\.xml$/, //xml-i hamar
        use: ['xml-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties'
            ]
          }
        }
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript'
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties'
            ]
          }
        }
      },
    ]
  }
}