const path = require('path');

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'src/styles')],
    prependData: `@import "resources.scss";`,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: {and: [/\.(js|ts|md)x?$/]},
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {plugins: [{removeViewBox: false}]},
          },
        },
      ],
    });

    return config;
  },
};
