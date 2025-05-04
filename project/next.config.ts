import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["http://localhost:3000"],
    },
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
