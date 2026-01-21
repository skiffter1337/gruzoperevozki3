import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    bundler: "webpack",
  },
};

export default nextConfig;
