const deps = require('./package.json').dependencies;
module.exports = {
  publicPath: 'auto',
  chainWebpack: (config) => {
    // config.optimization.delete('splitChunks');
    config
      .plugin('module-federation-plugin')
      .use(require('webpack').container.ModuleFederationPlugin, [
        {
          name: 'consumer',
          filename: 'remoteEntry.js',
          remotes: {
            app1: 'app1@http://localhost:3002/remoteEntry.js',
            app2: 'app2@http://localhost:3003/remoteEntry.js',
          },
          exposes: {},
          shared: {
            vue: {
              eager: true,
              singleton: true,
              requiredVersion: deps.vue,
            },
          },
        },
      ]);
  },
  //
  devServer: {
    port: 3001,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
};
