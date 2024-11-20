module.exports = {
    webpack: {
        configure: (webpackConfig) => {
          webpackConfig.module.rules.push({
            test: /\.m?js$/,
            resolve: { fullySpecified: false },
          });
          return webpackConfig;
        },
        resolve: {
          extensions: ['.js', '.jsx', '.json'],
        },
      },
  babel: {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react'
    ],
    plugins: [
      '@babel/plugin-proposal-nullish-coalescing-operator',
      '@babel/plugin-proposal-optional-chaining'
    ],
  },
};