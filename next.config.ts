import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule: any) => rule.test?.test?.('.svg'));
    
    fileLoaderRule.exclude = /\.svg$/i;
    
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      // include: /assets\/icons/,
      use: ["@svgr/webpack"]
    })

    return config;
  },
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          as: "*.js",
          loaders: ["@svgr/webpack"]
        }
      }
    }
  }
};

export default nextConfig;
