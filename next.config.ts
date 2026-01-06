import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/homepage",
  assetPrefix: "/homepage",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
