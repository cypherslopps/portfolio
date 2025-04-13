import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js", // Ensures SVGs are treated as JavaScript modules
        },
      },
    },
  },
};

export default nextConfig;
