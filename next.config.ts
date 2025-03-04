<<<<<<< HEAD
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
=======
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
>>>>>>> 72f793bc761b108143829420631aaa61d6639d50
};

export default nextConfig;
