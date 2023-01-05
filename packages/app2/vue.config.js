const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');
const container = webpack.container;
const { ModuleFederationPlugin } = container;

const _PRODUCTION_ = process.env.NODE_ENV === 'production';

const publicPath = _PRODUCTION_ ? `${SERVICES_URL}/testapp` : 'http://localhost:3003';
const proxyTarget = _PRODUCTION_ ? `${SERVICES_URL}/testapp` : 'http://localhost:3200';

module.exports = {
  devServer: {
    port: 3003,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: proxyTarget,
      },
    },
    hot: true,
  },
  publicPath: '/',

  configureWebpack: (config) => {
    const moduleFederationPlugin = new ModuleFederationPlugin({
      name: 'micto2',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App',
      },
    });

    config.plugins.push(moduleFederationPlugin);

    if (_PRODUCTION_) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'disabled',
        }),
      );
    } else {
      // изменения для разработки...
    }
  },

  pluginOptions: {
    webpack: {
      dir: ['./webpack'],
    },
  },
};
