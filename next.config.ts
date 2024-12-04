import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/component",
  images: {
    domains: ["shorturl.at", "cdn.sanity.io"]
  }
};

export default nextConfig;
