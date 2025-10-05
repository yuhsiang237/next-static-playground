import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/next-static-playground" : "",
  assetPrefix: isProd ? "/next-static-playground/" : "",
};

export default nextConfig;
