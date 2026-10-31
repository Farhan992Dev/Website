import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "web-site-back.vercel.app",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "web-site-back.vercel.app",
        pathname: "/upload/**",
      },
    ],
  },
};

export default nextConfig;
