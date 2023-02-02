const nextConfig = {
  env: {},
  experimental: {
    appDir: true,
  },
  images: {
    domains: [],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            dimensions: false,
          },
        },
      ],
      type: "javascript/auto",
      issuer: {
        and: [/\.(js|ts)x?$/],
      },
    });

    return config;
  },

  // security concerns
  poweredByHeader: false,
};

module.exports = nextConfig;
