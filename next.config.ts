import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "gear5world.com",
        protocol: "https",
        port: ""
      },
      {
        hostname: "lh3.googleusercontent.com",
        protocol: "https",
        port: ""
      },
      {
        hostname: "s.yimg.com",
        protocol: "https",
        port: ""
      },
      {
        hostname: "wallpapers-clan.com",
        protocol: "https",
        port: ""
      },
    ]
  }
};

export default nextConfig;
