/** @type {import('next').NextConfig} */

module.exports = {
  // output: "export",
  // distDir: "dist",
  // experimental: {
  //   serverActions: {
  //     allowedOrigins: ["localhost:3000", "qirguli-issiqlik.uz"],
  //   },
  //   serverComponents: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "v0/b/qim-lp.appspot.com/o",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push(
      {
        test: /\.(pdf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: "/_next/static/files",
              outputPath: `${isServer ? "../" : ""}static/files`,
              name: "[name].[ext]",
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.(docx)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: "/_next/static/files",
              outputPath: `${isServer ? "../" : ""}static/files`,
              name: "[name].[ext]",
              esModule: false,
            },
          },
        ],
      }
    );

    return config;
  },
};
