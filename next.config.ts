/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, 
  },
  webpack: (config:any) => {
    config.module.rules.push({
      test: /pdf\.worker\.(min\.)?js/,
      loader: "file-loader",
      options: {
        name: "[name].[ext]",
      },
    });

    return config;
  },
};

export default nextConfig;
