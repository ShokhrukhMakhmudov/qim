/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  distDir: "dist",
}; // next.config.js

module.exports = {
  output: "export",
  distDir: "dist",
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
